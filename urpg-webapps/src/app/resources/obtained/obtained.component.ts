import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ObtainedService } from 'src/app/services/general/obtained.service';
import { plainToClass } from 'class-transformer';
import { Obtained } from 'src/app/models/general/Obtained';
import { ActivatedRoute } from '@angular/router';
import { ObtainedDelta } from 'src/app/models/general/ObtainedDelta';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'resources-obtained',
  templateUrl: './obtained.component.html',
  styleUrls: ['./obtained.component.css']
})
export class ObtainedComponent implements OnInit {

  names = [];
  model:Obtained = undefined;
  delta = new ObtainedDelta();
  editType = "update";

  @ViewChild('messageBox', {static: false})
  messageBox:MessageComponent;

  constructor(
    private route: ActivatedRoute,
    private service : ObtainedService
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
    this.delta = new ObtainedDelta();
  }

  findByName(name) {
    this.editType = "update";
    this.delta = new ObtainedDelta();
    this.service.findByName(name).subscribe(model => {
      this.model = plainToClass(Obtained, model);
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
    this.messageBox.showSuccess(`Obtained ${this.editType}d successfully!`);
    this.editType = "update";
    this.delta = new ObtainedDelta();
    this.model = plainToClass(Obtained, model);
  }

  showErrorMessage(error) {
    this.messageBox.clear();
    if (error.error.errors !== undefined) {
      let messages = error.error.errors.map(message => {
        return `Field "${message.field}": ${message.defaultMessage}.`;
      });
      this.messageBox.showErrorArray(`Obtained could not be ${this.editType}d.`, messages);
    }
    else {
      this.messageBox.showError(`Obtained could not be ${this.editType}d. Error: ${error.error.message}`);
    }
  }

  detectChanges() {
    return !this.delta.isEmpty();
  }

}
