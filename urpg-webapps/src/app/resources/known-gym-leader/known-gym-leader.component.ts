import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { KnownGymLeaderService } from 'src/app/services/gym/known-gym-leader.service';
import { plainToClass } from 'class-transformer';
import { KnownGymLeader } from 'src/app/models/gym/KnownGymLeader';
import { ActivatedRoute } from '@angular/router';
import { KnownGymLeaderDelta } from 'src/app/models/gym/KnownGymLeaderDelta';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'resources-known-gym-leader',
  templateUrl: './known-gym-leader.component.html',
  styleUrls: ['./known-gym-leader.component.css']
})
export class KnownGymLeaderComponent implements OnInit {

  names = [];
  model:KnownGymLeader = undefined;
  delta = new KnownGymLeaderDelta();
  editType = "update";

  @ViewChild('messageBox', {static: false})
  messageBox:MessageComponent;

  constructor(
    private route: ActivatedRoute,
    private service : KnownGymLeaderService
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
    this.delta = new KnownGymLeaderDelta();
  }

  findByName(name) {
    this.editType = "update";
    this.delta = new KnownGymLeaderDelta();
    this.service.findByName(name).subscribe(model => {
      this.model = plainToClass(KnownGymLeader, model);
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
    this.messageBox.showSuccess(`KnownGymLeader ${this.editType}d successfully!`);
    this.editType = "update";
    this.delta = new KnownGymLeaderDelta();
    this.model = plainToClass(KnownGymLeader, model);
  }

  showErrorMessage(error) {
    this.messageBox.clear();
    if (error.error.errors !== undefined) {
      let messages = error.error.errors.map(message => {
        return `Field "${message.field}": ${message.defaultMessage}.`;
      });
      this.messageBox.showErrorArray(`KnownGymLeader could not be ${this.editType}d.`, messages);
    }
    else {
      this.messageBox.showError(`KnownGymLeader could not be ${this.editType}d. Error: ${error.error.message}`);
    }
  }

  detectChanges() {
    return !this.delta.isEmpty();
  }

}
