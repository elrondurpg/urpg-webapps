import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { plainToClass } from 'class-transformer';
import { ContestAttribute } from 'src/app/models/contest/ContestAttribute';
import { ContestAttributeDelta } from 'src/app/models/contest/ContestAttributeDelta';
import { ContestAttributeService } from 'src/app/services/contest/contest-attribute.service';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'resources-contest-attribute',
  templateUrl: './contest-attribute.component.html',
  styleUrls: ['./contest-attribute.component.css']
})
export class ContestAttributeComponent implements OnInit {
  names:string[] = [];
  model:ContestAttribute = undefined;
  delta:ContestAttributeDelta = new ContestAttributeDelta();
  editType = "update";

  @ViewChild('messageBox', {static: false})
  messageBox:MessageComponent;

  constructor(
    private route: ActivatedRoute,
    private service:ContestAttributeService
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
    this.delta = new ContestAttributeDelta();
  }

  findByName(name) {
    this.editType = "update";
    this.delta = new ContestAttributeDelta();
    this.service.findByName(name).subscribe(model => {
      this.model = plainToClass(ContestAttribute, model);
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
    this.messageBox.showSuccess(`ContestAttribute ${this.editType}d successfully!`);
    this.editType = "update";
    this.delta = new ContestAttributeDelta();
    this.model = plainToClass(ContestAttribute, model);
  }

  showErrorMessage(error) {
    this.messageBox.clear();
    if (error.error.errors !== undefined) {
      let messages = error.error.errors.map(message => {
        return `Field "${message.field}": ${message.defaultMessage}.`;
      });
      this.messageBox.showErrorArray(`ContestAttribute could not be ${this.editType}d.`, messages);
    }
    else {
      this.messageBox.showError(`ContestAttribute could not be ${this.editType}d. Error: ${error.error.message}`);
    }
  }

  detectChanges() {
    return !this.delta.isEmpty();
  }

}
