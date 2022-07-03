import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { plainToClass } from 'class-transformer';
import { Permission } from 'src/app/models/member/Permission';
import { PermissionDelta } from 'src/app/models/member/PermissionDelta';
import { PermissionService } from 'src/app/services/member/permission.service';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'resources-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.css']
})
export class PermissionComponent implements OnInit {
  names:string[] = [];
  model:Permission = undefined;
  delta:PermissionDelta = new PermissionDelta();
  editType = "update";

  @ViewChild('messageBox', {static: false})
  messageBox:MessageComponent;

  constructor(
    private route: ActivatedRoute,
    private service:PermissionService
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
    this.delta = new PermissionDelta();
  }

  findByName(name) {
    this.editType = "update";
    this.delta = new PermissionDelta();
    this.service.findByName(name).subscribe(model => {
      this.model = plainToClass(Permission, model);
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
    this.messageBox.showSuccess(`Permission ${this.editType}d successfully!`);
    this.editType = "update";
    this.delta = new PermissionDelta();
    this.model = plainToClass(Permission, model);
  }

  showErrorMessage(error) {
    this.messageBox.clear();
    if (error.error.errors !== undefined) {
      let messages = error.error.errors.map(message => {
        return `Field "${message.field}": ${message.defaultMessage}.`;
      });
      this.messageBox.showErrorArray(`Permission could not be ${this.editType}d.`, messages);
    }
    else {
      this.messageBox.showError(`Permission could not be ${this.editType}d. Error: ${error.error.message}`);
    }
  }

  detectChanges() {
    return !this.delta.isEmpty();
  }

}
