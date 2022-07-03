import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ParkRankService } from 'src/app/services/creative/park-rank.service';
import { plainToClass } from 'class-transformer';
import { ParkRank } from 'src/app/models/creative/ParkRank';
import { ActivatedRoute } from '@angular/router';
import { ParkRankDelta } from 'src/app/models/creative/ParkRankDelta';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'resources-park-rank',
  templateUrl: './park-rank.component.html',
  styleUrls: ['./park-rank.component.css']
})
export class ParkRankComponent implements OnInit {

  names = [];
  model:ParkRank = undefined;
  delta = new ParkRankDelta();
  editType = "update";

  @ViewChild('messageBox', {static: false})
  messageBox:MessageComponent;

  constructor(
    private route: ActivatedRoute,
    private service : ParkRankService
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
    this.delta = new ParkRankDelta();
  }

  findByName(name) {
    this.editType = "update";
    this.delta = new ParkRankDelta();
    this.service.findByName(name).subscribe(model => {
      this.model = plainToClass(ParkRank, model);
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
    this.messageBox.showSuccess(`ParkRank ${this.editType}d successfully!`);
    this.editType = "update";
    this.delta = new ParkRankDelta();
    this.model = plainToClass(ParkRank, model);
  }

  showErrorMessage(error) {
    this.messageBox.clear();
    if (error.error.errors !== undefined) {
      let messages = error.error.errors.map(message => {
        return `Field "${message.field}": ${message.defaultMessage}.`;
      });
      this.messageBox.showErrorArray(`ParkRank could not be ${this.editType}d.`, messages);
    }
    else {
      this.messageBox.showError(`ParkRank could not be ${this.editType}d. Error: ${error.error.message}`);
    }
  }

  detectChanges() {
    return !this.delta.isEmpty();
  }

}
