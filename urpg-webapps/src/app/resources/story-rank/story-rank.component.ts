import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { StoryRankService } from 'src/app/services/creative/story-rank.service';
import { plainToClass } from 'class-transformer';
import { StoryRank } from 'src/app/models/creative/StoryRank';
import { ActivatedRoute } from '@angular/router';
import { StoryRankDelta } from 'src/app/models/creative/StoryRankDelta';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'resources-story-rank',
  templateUrl: './story-rank.component.html',
  styleUrls: ['./story-rank.component.css']
})
export class StoryRankComponent implements OnInit {

  names = [];
  model:StoryRank = undefined;
  delta = new StoryRankDelta();
  editType = "update";

  @ViewChild('messageBox', {static: false})
  messageBox:MessageComponent;

  constructor(
    private route: ActivatedRoute,
    private service : StoryRankService
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
    this.delta = new StoryRankDelta();
  }

  findByName(name) {
    this.editType = "update";
    this.delta = new StoryRankDelta();
    this.service.findByName(name).subscribe(model => {
      this.model = plainToClass(StoryRank, model);
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
    this.messageBox.showSuccess(`StoryRank ${this.editType}d successfully!`);
    this.editType = "update";
    this.delta = new StoryRankDelta();
    this.model = plainToClass(StoryRank, model);
  }

  showErrorMessage(error) {
    this.messageBox.clear();
    if (error.error.errors !== undefined) {
      let messages = error.error.errors.map(message => {
        return `Field "${message.field}": ${message.defaultMessage}.`;
      });
      this.messageBox.showErrorArray(`StoryRank could not be ${this.editType}d.`, messages);
    }
    else {
      this.messageBox.showError(`StoryRank could not be ${this.editType}d. Error: ${error.error.message}`);
    }
  }

  detectChanges() {
    return !this.delta.isEmpty();
  }

}
