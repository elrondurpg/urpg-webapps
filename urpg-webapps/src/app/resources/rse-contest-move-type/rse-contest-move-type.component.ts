import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { plainToClass } from 'class-transformer';
import { RseContestMoveType } from 'src/app/models/contest/RSEContestMoveType';
import { ContestMoveTypeDelta } from 'src/app/models/contest/ContestMoveTypeDelta';
import { RseContestMoveTypeService } from 'src/app/services/contest/rse-contest-move-type.service';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'resources-rse-contest-move-type',
  templateUrl: './rse-contest-move-type.component.html',
  styleUrls: ['./rse-contest-move-type.component.css']
})
export class RseContestMoveTypeComponent implements OnInit {

  names:string[] = [];
  model:RseContestMoveType = undefined;
  delta:ContestMoveTypeDelta = new ContestMoveTypeDelta();
  editType = "update";

  @ViewChild('messageBox', {static: false})
  messageBox:MessageComponent;

  constructor(
    private route: ActivatedRoute,
    private service:RseContestMoveTypeService
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
    this.delta = new ContestMoveTypeDelta();
  }

  findByName(name) {
    this.editType = "update";
    this.delta = new ContestMoveTypeDelta();
    this.service.findByName(name).subscribe(model => {
      this.model = plainToClass(RseContestMoveType, model);
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
    this.messageBox.showSuccess(`RseContestMoveType ${this.editType}d successfully!`);
    this.editType = "update";
    this.delta = new ContestMoveTypeDelta();
    this.model = plainToClass(RseContestMoveType, model);
  }

  showErrorMessage(error) {
    this.messageBox.clear();
    if (error.error.errors !== undefined) {
      let messages = error.error.errors.map(message => {
        return `Field "${message.field}": ${message.defaultMessage}.`;
      });
      this.messageBox.showErrorArray(`RseContestMoveType could not be ${this.editType}d.`, messages);
    }
    else {
      this.messageBox.showError(`RseContestMoveType could not be ${this.editType}d. Error: ${error.error.message}`);
    }
  }

  detectChanges() {
    return !this.delta.isEmpty();
  }
}
