import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { plainToClass } from 'class-transformer';
import { OrasContestMoveType } from 'src/app/models/contest/OrasContestMoveType';
import { ContestMoveTypeDelta } from 'src/app/models/contest/ContestMoveTypeDelta';
import { OrasContestMoveTypeService } from 'src/app/services/contest/oras-contest-move-type.service';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'resources-oras-contest-move-type',
  templateUrl: './oras-contest-move-type.component.html',
  styleUrls: ['./oras-contest-move-type.component.css']
})
export class OrasContestMoveTypeComponent implements OnInit {

  names:string[] = [];
  model:OrasContestMoveType = undefined;
  delta:ContestMoveTypeDelta = new ContestMoveTypeDelta();
  editType = "update";

  @ViewChild('messageBox', {static: false})
  messageBox:MessageComponent;

  constructor(
    private route: ActivatedRoute,
    private service:OrasContestMoveTypeService
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
      this.model = plainToClass(OrasContestMoveType, model);
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
    this.messageBox.showSuccess(`OrasContestMoveType ${this.editType}d successfully!`);
    this.editType = "update";
    this.delta = new ContestMoveTypeDelta();
    this.model = plainToClass(OrasContestMoveType, model);
  }

  showErrorMessage(error) {
    this.messageBox.clear();
    if (error.error.errors !== undefined) {
      let messages = error.error.errors.map(message => {
        return `Field "${message.field}": ${message.defaultMessage}.`;
      });
      this.messageBox.showErrorArray(`OrasContestMoveType could not be ${this.editType}d.`, messages);
    }
    else {
      this.messageBox.showError(`OrasContestMoveType could not be ${this.editType}d. Error: ${error.error.message}`);
    }
  }

  detectChanges() {
    return !this.delta.isEmpty();
  }
}
