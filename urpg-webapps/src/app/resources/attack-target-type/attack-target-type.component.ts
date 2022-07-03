import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { plainToClass } from 'class-transformer';
import { AttackTargetType } from 'src/app/models/attack/AttackTargetType';
import { AttackTargetTypeDelta } from 'src/app/models/attack/AttackTargetTypeDelta';
import { AttackTargetTypeService } from 'src/app/services/attack/attack-target-type.service';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'resources-attack-target-type',
  templateUrl: './attack-target-type.component.html',
  styleUrls: ['./attack-target-type.component.css']
})
export class AttackTargetTypeComponent implements OnInit {
  names:string[] = [];
  model:AttackTargetType = undefined;
  delta:AttackTargetTypeDelta = new AttackTargetTypeDelta();
  editType = "update";

  @ViewChild('messageBox', {static: false})
  messageBox:MessageComponent;

  constructor(
    private route: ActivatedRoute,
    private service:AttackTargetTypeService
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
    this.delta = new AttackTargetTypeDelta();
  }

  findByName(name) {
    this.editType = "update";
    this.delta = new AttackTargetTypeDelta();
    this.service.findByName(name).subscribe(model => {
      this.model = plainToClass(AttackTargetType, model);
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
    this.messageBox.showSuccess(`AttackTargetType ${this.editType}d successfully!`);
    this.editType = "update";
    this.delta = new AttackTargetTypeDelta();
    this.model = plainToClass(AttackTargetType, model);
  }

  showErrorMessage(error) {
    this.messageBox.clear();
    if (error.error.errors !== undefined) {
      let messages = error.error.errors.map(message => {
        return `Field "${message.field}": ${message.defaultMessage}.`;
      });
      this.messageBox.showErrorArray(`AttackTargetType could not be ${this.editType}d.`, messages);
    }
    else {
      this.messageBox.showError(`AttackTargetType could not be ${this.editType}d. Error: ${error.error.message}`);
    }
  }

  detectChanges() {
    return !this.delta.isEmpty();
  }

}
