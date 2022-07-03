import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { plainToClass } from 'class-transformer';
import { ArtRank } from 'src/app/models/creative/ArtRank';
import { ArtRankDelta } from 'src/app/models/creative/ArtRankDelta';
import { ArtRankService } from 'src/app/services/creative/art-rank.service';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'resources-art-rank',
  templateUrl: './art-rank.component.html',
  styleUrls: ['./art-rank.component.css']
})
export class ArtRankComponent implements OnInit {
  names:string[] = [];
  model:ArtRank = undefined;
  delta:ArtRankDelta = new ArtRankDelta();
  editType = "update";

  @ViewChild('messageBox', {static: false})
  messageBox:MessageComponent;

  constructor(
    private route: ActivatedRoute,
    private service:ArtRankService
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
    this.delta = new ArtRankDelta();
  }

  findByName(name) {
    this.editType = "update";
    this.delta = new ArtRankDelta();
    this.service.findByName(name).subscribe(model => {
      this.model = plainToClass(ArtRank, model);
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
    this.messageBox.showSuccess(`ArtRank ${this.editType}d successfully!`);
    this.editType = "update";
    this.delta = new ArtRankDelta();
    this.model = plainToClass(ArtRank, model);
  }

  showErrorMessage(error) {
    this.messageBox.clear();
    if (error.error.errors !== undefined) {
      let messages = error.error.errors.map(message => {
        return `Field "${message.field}": ${message.defaultMessage}.`;
      });
      this.messageBox.showErrorArray(`ArtRank could not be ${this.editType}d.`, messages);
    }
    else {
      this.messageBox.showError(`ArtRank could not be ${this.editType}d. Error: ${error.error.message}`);
    }
  }

  detectChanges() {
    return !this.delta.isEmpty();
  }

}
