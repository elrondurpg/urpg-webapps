import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { plainToClass } from 'class-transformer';
import { Role } from 'src/app/models/member/Role';
import { RoleDelta } from 'src/app/models/member/RoleDelta';
import { RolePermissionDelta } from 'src/app/models/member/RolePermissionDelta';
import { PermissionService } from 'src/app/services/member/permission.service';
import { RoleService } from 'src/app/services/member/role.service';
import { MessageComponent } from '../message/message.component';
import { AccordionPropertyKeyBuilder } from 'src/app/models/AccordionPropertyKey';
import { AccordionPropertyMap, AccordionPropertyMapBuilder } from 'src/app/models/AccordionPropertyMap';

@Component({
  selector: 'resources-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  names:string[] = [];
  model:Role = undefined;
  delta:RoleDelta = new RoleDelta();
  editType = "update";
  permissionNames:string[] = [];
  rolePermissionKeys = [
    new AccordionPropertyKeyBuilder()
      .withTitle("Permission")
      .withType("select")
      .withAllowedValues(this.permissionNames)
      .withFilterable(true)
      .withModelSelector("name")
      .withDeltaSelector("name")
      .build()
  ];
  rolePermissionPropertyDefinition = 
    new AccordionPropertyMapBuilder()
      .withKeyDefinitions(this.rolePermissionKeys)
      .withObjectClass(RolePermissionDelta)
      .build();

  @ViewChild('messageBox', {static: false})
  messageBox:MessageComponent;

  constructor(
    private route: ActivatedRoute,
    private service:RoleService,
    private permissionService:PermissionService
  ) { }

  ngOnInit() {
    this.loadNames();
    this.permissionService.findAllNames().subscribe(permissionNames => {
      this.permissionNames.push(...permissionNames);
    });
    this.route.params.subscribe(params => {
      if (params['name']) {
        this.findByName(params['name']);
      }
    });
  }

  loadNames() {
    this.service.findAllNames().subscribe(names => this.names.push(...names));
  }

  create() {
    this.editType = "create";
    this.delta = new RoleDelta();
    this.rolePermissionPropertyDefinition.deltas = this.delta.permissions;
    this.rolePermissionPropertyDefinition.setPrototypes(this.model.permissions);
  }

  findByName(name) {
    this.editType = "update";
    this.delta = new RoleDelta();
    this.service.findByName(name).subscribe(model => {
      this.model = plainToClass(Role, model);
      console.log(this.model);
    this.rolePermissionPropertyDefinition.deltas = this.delta.permissions;
    this.rolePermissionPropertyDefinition.setPrototypes(this.model.permissions);
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
    this.messageBox.showSuccess(`Role ${this.editType}d successfully!`);
    this.editType = "update";
    this.delta = new RoleDelta();
    this.model = plainToClass(Role, model);
    this.rolePermissionPropertyDefinition.deltas = this.delta.permissions;
    this.rolePermissionPropertyDefinition.setPrototypes(this.model.permissions);
  }

  showErrorMessage(error) {
    this.messageBox.clear();
    if (error.error.errors !== undefined) {
      let messages = error.error.errors.map(message => {
        return `Field "${message.field}": ${message.defaultMessage}.`;
      });
      this.messageBox.showErrorArray(`Role could not be ${this.editType}d.`, messages);
    }
    else {
      this.messageBox.showError(`Role could not be ${this.editType}d. Error: ${error.error.message}`);
    }
  }

  detectChanges() {
    return !this.delta.isEmpty() || this.rolePermissionPropertyDefinition.hasChanges();
  }

}
