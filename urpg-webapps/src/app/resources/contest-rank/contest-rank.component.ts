import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { plainToClass } from 'class-transformer';
import { ContestRank } from 'src/app/models/contest/ContestRank';
import { ContestRankDelta } from 'src/app/models/contest/ContestRankDelta';
import { ContestRankService } from 'src/app/services/contest/contest-rank.service';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'resources-contest-rank',
  templateUrl: './contest-rank.component.html',
  styleUrls: ['./contest-rank.component.css']
})
export class ContestRankComponent implements OnInit {
  names:string[] = [];
  model:ContestRank = undefined;
  delta:ContestRankDelta = new ContestRankDelta();
  editType = "update";

  @ViewChild('messageBox', {static: false})
  messageBox:MessageComponent;

  constructor(
    private route: ActivatedRoute,
    private service:ContestRankService
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
    this.delta = new ContestRankDelta();
  }

  findByName(name) {
    this.editType = "update";
    this.delta = new ContestRankDelta();
    this.service.findByName(name).subscribe(model => {
      this.model = plainToClass(ContestRank, model);
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
    this.messageBox.showSuccess(`ContestRank ${this.editType}d successfully!`);
    this.editType = "update";
    this.delta = new ContestRankDelta();
    this.model = plainToClass(ContestRank, model);
  }

  showErrorMessage(error) {
    this.messageBox.clear();
    if (error.error.errors !== undefined) {
      let messages = error.error.errors.map(message => {
        return `Field "${message.field}": ${message.defaultMessage}.`;
      });
      this.messageBox.showErrorArray(`ContestRank could not be ${this.editType}d.`, messages);
    }
    else {
      this.messageBox.showError(`ContestRank could not be ${this.editType}d. Error: ${error.error.message}`);
    }
  }

  detectChanges() {
    return !this.delta.isEmpty();
  }

}
