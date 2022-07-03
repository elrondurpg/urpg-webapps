import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TypeService } from 'src/app/services/species/type.service';
import { plainToClass } from 'class-transformer';
import { Type } from 'src/app/models/species/Type';
import { ActivatedRoute } from '@angular/router';
import { TypeDelta } from 'src/app/models/species/TypeDelta';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'resources-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {

  names = [];
  model:Type = undefined;
  delta = new TypeDelta();
  editType = "update";

  @ViewChild('messageBox', {static: false})
  messageBox:MessageComponent;

  constructor(
    private route: ActivatedRoute,
    private service : TypeService
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
    this.delta = new TypeDelta();
  }

  findByName(name) {
    this.editType = "update";
    this.delta = new TypeDelta();
    this.service.findByName(name).subscribe(model => {
      this.model = plainToClass(Type, model);
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
    this.messageBox.showSuccess(`Type ${this.editType}d successfully!`);
    this.editType = "update";
    this.delta = new TypeDelta();
    this.model = plainToClass(Type, model);
  }

  showErrorMessage(error) {
    this.messageBox.clear();
    if (error.error.errors !== undefined) {
      let messages = error.error.errors.map(message => {
        return `Field "${message.field}": ${message.defaultMessage}.`;
      });
      this.messageBox.showErrorArray(`Type could not be ${this.editType}d.`, messages);
    }
    else {
      this.messageBox.showError(`Type could not be ${this.editType}d. Error: ${error.error.message}`);
    }
  }

  detectChanges() {
    return !this.delta.isEmpty();
  }

}
