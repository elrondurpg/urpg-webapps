import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NatureService } from 'src/app/services/general/nature.service';
import { plainToClass } from 'class-transformer';
import { Nature } from 'src/app/models/general/Nature';
import { ActivatedRoute } from '@angular/router';
import { NatureDelta } from 'src/app/models/general/NatureDelta';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'resources-nature',
  templateUrl: './nature.component.html',
  styleUrls: ['./nature.component.css']
})
export class NatureComponent implements OnInit {

  names = [];
  model:Nature = undefined;
  delta = new NatureDelta();
  editType = "update";

  @ViewChild('messageBox', {static: false})
  messageBox:MessageComponent;

  constructor(
    private route: ActivatedRoute,
    private service : NatureService
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
    this.delta = new NatureDelta();
  }

  findByName(name) {
    this.editType = "update";
    this.delta = new NatureDelta();
    this.service.findByName(name).subscribe(model => {
      this.model = plainToClass(Nature, model);
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
    this.messageBox.showSuccess(`Nature ${this.editType}d successfully!`);
    this.editType = "update";
    this.delta = new NatureDelta();
    this.model = plainToClass(Nature, model);
  }

  showErrorMessage(error) {
    this.messageBox.clear();
    if (error.error.errors !== undefined) {
      let messages = error.error.errors.map(message => {
        return `Field "${message.field}": ${message.defaultMessage}.`;
      });
      this.messageBox.showErrorArray(`Nature could not be ${this.editType}d.`, messages);
    }
    else {
      this.messageBox.showError(`Nature could not be ${this.editType}d. Error: ${error.error.message}`);
    }
  }

  detectChanges() {
    return !this.delta.isEmpty();
  }

}
