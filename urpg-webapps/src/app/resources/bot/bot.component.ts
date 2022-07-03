import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { plainToClass } from 'class-transformer';
import { Member } from 'src/app/models/member/Member';
import { MemberDelta } from 'src/app/models/member/MemberDelta';
import { MemberRoleDelta } from 'src/app/models/member/MemberRoleDelta';
import { MemberService } from 'src/app/services/member/member.service';
import { RoleService } from 'src/app/services/member/role.service';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'resources-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.css']
})
export class BotComponent implements OnInit {
  names:string[] = [];
  model:Member = undefined;
  delta:MemberDelta = new MemberDelta();
  editType = "update";
  memberRoleDeltaClass = MemberRoleDelta;
  roleNames:string[];

  @ViewChild('messageBox', {static: false})
  messageBox:MessageComponent;

  constructor(
    private route: ActivatedRoute,
    private service:MemberService,
    private roleService:RoleService
  ) { }

  ngOnInit() {
    this.loadNames();
    this.roleService.findAllNames().subscribe(names => {
      this.roleNames = names
    });
    this.route.params.subscribe(params => {
      if (params['name']) {
        this.findByName(params['name']);
      }
    });
  }

  loadNames() {
    this.service.findNamesBy({ "bot" : true }).subscribe(
      names => {
        this.names = names
      });
  }

  create() {
    this.editType = "create";
    this.delta = new MemberDelta();
  }

  findByName(name) {
    this.editType = "update";
    this.delta = new MemberDelta();
    this.service.findByName(name).subscribe(model => {
      this.model = plainToClass(Member, model);
    });
  }

  save() {
    this.delta["bot"] = true;
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
    this.messageBox.showSuccess(`Bot ${this.editType}d successfully!`);
    this.editType = "update";
    this.delta = new MemberDelta();
    this.model = plainToClass(Member, model);
  }

  showErrorMessage(error) {
    this.messageBox.clear();
    if (error.error.errors !== undefined) {
      let messages = error.error.errors.map(message => {
        return `Field "${message.field}": ${message.defaultMessage}.`;
      });
      this.messageBox.showErrorArray(`Bot could not be ${this.editType}d.`, messages);
    }
    else {
      this.messageBox.showError(`Bot could not be ${this.editType}d. Error: ${error.error.message}`);
    }
  }

  detectChanges() {
    return !this.delta.isEmpty();
  }

}
