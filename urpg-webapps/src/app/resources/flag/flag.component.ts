import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FlagService } from 'src/app/services/general/flag.service';
import { plainToClass } from 'class-transformer';
import { Flag } from 'src/app/models/general/Flag';
import { ActivatedRoute } from '@angular/router';
import { FlagDelta } from 'src/app/models/general/FlagDelta';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'resources-flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.css']
})
export class FlagComponent implements OnInit {

  names = [];
  model:Flag = undefined;
  delta = new FlagDelta();
  editType = "update";

  flagTypes = [ "BOOLEAN", "STRING", "INTEGER", "DOUBLE"];

  @ViewChild('messageBox', {static: false})
  messageBox:MessageComponent;

  constructor(
    private route: ActivatedRoute,
    private service : FlagService
  ) { }

  ngOnInit() {
    this.loadNames();
    this.route.params.subscribe(params => {
      if (params['name']) {
        this.findByName(params['name']);
      }
    });
  }

  loadNames() {
    this.service.findAllNames().subscribe(names => this.names = names);
  }

  create() {
    this.editType = "create";
    this.delta = new FlagDelta();
  }

  findByName(name) {
    this.editType = "update";
    this.delta = new FlagDelta();
    this.service.findByName(name).subscribe(model => {
      this.model = plainToClass(Flag, model);
      console.log(this.model);
    });
  }

  save() {
    console.log(this.delta);
    if (this.editType == "update") {
      this.service.update(this.model.dbid, this.delta).subscribe(
        model => this.showSuccessMessage(model),
        error => this.showErrorMessage(error));
    }
    else if (this.editType == "create") {
      this.service.create(this.delta).subscribe(
        model => this.showSuccessMessage(model),
        error => this.showErrorMessage(error)
      );
    }
  }

  showSuccessMessage(model) {
    this.loadNames();
    this.messageBox.clear();
    this.messageBox.showSuccess(`Flag ${this.editType}d successfully!`);
    this.editType = "update";
    this.delta = new FlagDelta();
    this.model = plainToClass(Flag, model);
  }

  showErrorMessage(error) {
    this.messageBox.clear();
    if (error.error.errors !== undefined) {
      let messages = error.error.errors.map(message => {
        return `Field "${message.field}": ${message.defaultMessage}.`;
      });
      this.messageBox.showErrorArray(`Flag could not be ${this.editType}d.`, messages);
    }
    else {
      this.messageBox.showError(`Flag could not be ${this.editType}d. Error: ${error.error.message}`);
    }
  }

  detectChanges() {
    return !this.delta.isEmpty();
  }

}
