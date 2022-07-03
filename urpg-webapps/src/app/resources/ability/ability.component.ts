import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AbilityService } from 'src/app/services/ability/ability.service';
import { plainToClass } from 'class-transformer';
import { Ability } from 'src/app/models/ability/Ability';
import { ActivatedRoute } from '@angular/router';
import { AbilityDelta } from 'src/app/models/ability/AbilityDelta';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'resources-ability',
  templateUrl: './ability.component.html',
  styleUrls: ['./ability.component.css']
})
export class AbilityComponent implements OnInit {

  names = [];
  model:Ability = undefined;
  delta = new AbilityDelta();
  editType = "update";

  @ViewChild('messageBox', {static: false})
  messageBox:MessageComponent;

  constructor(
    private route: ActivatedRoute,
    private service : AbilityService
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
    this.delta = new AbilityDelta();
  }

  findByName(name) {
    this.editType = "update";
    this.delta = new AbilityDelta();
    this.service.findByName(name).subscribe(model => {
      this.model = plainToClass(Ability, model);
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
    this.messageBox.showSuccess(`Ability ${this.editType}d successfully!`);
    this.editType = "update";
    this.delta = new AbilityDelta();
    this.model = plainToClass(Ability, model);
  }

  showErrorMessage(error) {
    this.messageBox.clear();
    if (error.error.errors !== undefined) {
      let messages = error.error.errors.map(message => {
        return `Field "${message.field}": ${message.defaultMessage}.`;
      });
      this.messageBox.showErrorArray(`Ability could not be ${this.editType}d.`, messages);
    }
    else {
      this.messageBox.showError(`Ability could not be ${this.editType}d. Error: ${error.error.message}`);
    }
  }

  detectChanges() {
    return !this.delta.isEmpty();
  }

}
