import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { plainToClass } from 'class-transformer';
import { Gym } from 'src/app/models/gym/Gym';
import { GymOwnershipTerm } from 'src/app/models/gym/GymOwnershipTerm';
import { GymDelta } from 'src/app/models/gym/GymDelta';
import { BadgeService } from 'src/app/services/gym/badge.service';
import { TypeService } from 'src/app/services/species/type.service';
import { GymService } from 'src/app/services/gym/gym.service';
import { MessageComponent } from '../message/message.component';
import { GymOwnershipTermService } from 'src/app/services/gym/gym-ownership-term.service';

@Component({
  selector: 'resources-gym',
  templateUrl: './gym.component.html',
  styleUrls: ['./gym.component.css']
})
export class GymComponent implements OnInit {
  names:string[] = [];
  model:Gym = undefined;
  delta:GymDelta = new GymDelta();
  editType = "update";
  badges:string[];
  types:string[];

  @ViewChild('messageBox', {static: false})
  messageBox:MessageComponent;

  constructor(
    private route: ActivatedRoute,
    private service:GymService,
    private badgeService : BadgeService,
    private typeService : TypeService,
  ) { }

  ngOnInit() {
    this.loadNames();
    this.route.params.subscribe(params => {
      if (params['name']) {
        this.findByName(params['name']);
      }
    });
    this.badgeService.findAllNames().subscribe(
      badges => {
        console.log(badges);
        this.badges = badges;
    });
    this.typeService.findAllNames().subscribe(
      types => {
        console.log(types);
        this.types = types;
    });
  }

  loadNames() {
    this.service.findAll().subscribe(
      names => {
        this.names = names
      });
  }

  findByName(name) {
    this.editType = "update";
    this.delta = new GymDelta();
    this.service.findByName(name).subscribe(model => {
      this.model = plainToClass(Gym, model);
      console.log("printed from gym.component");
      console.log(this.model);
    });
  }

  create() {
    this.editType = "create";
    this.delta = new GymDelta();
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
    this.messageBox.showSuccess(`Gym ${this.editType}d successfully!`);
    this.editType = "update";
    this.delta = new GymDelta();
    this.model = plainToClass(Gym, model);
  }

  showErrorMessage(error) {
    this.messageBox.clear();
    if (error.error.errors !== undefined) {
      let messages = error.error.errors.map(message => {
        return `Field "${message.field}": ${message.defaultMessage}.`;
      });
      this.messageBox.showErrorArray(`Gym could not be ${this.editType}d.`, messages);
    }
    else {
      this.messageBox.showError(`Gym could not be ${this.editType}d. Error: ${error.error.message}`);
    }
  }

  detectChanges() {
    return !this.delta.isEmpty();
  }

}
