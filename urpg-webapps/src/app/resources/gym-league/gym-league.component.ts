import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { plainToClass } from 'class-transformer';
import { GymLeague } from 'src/app/models/gym/GymLeague';
import { GymLeagueDelta } from 'src/app/models/gym/GymLeagueDelta';
import { GymLeagueService } from 'src/app/services/gym/gym-league.service';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'resources-gym-league',
  templateUrl: './gym-league.component.html',
  styleUrls: ['./gym-league.component.css']
})
export class GymLeagueComponent implements OnInit {
  names:string[] = [];
  model:GymLeague = undefined;
  delta:GymLeagueDelta = new GymLeagueDelta();
  editType = "update";

  @ViewChild('messageBox', {static: false})
  messageBox:MessageComponent;

  constructor(
    private route: ActivatedRoute,
    private service:GymLeagueService
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
    this.delta = new GymLeagueDelta();
  }

  findByName(name) {
    this.editType = "update";
    this.delta = new GymLeagueDelta();
    this.service.findByName(name).subscribe(model => {
      this.model = plainToClass(GymLeague, model);
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
    this.messageBox.showSuccess(`GymLeague ${this.editType}d successfully!`);
    this.editType = "update";
    this.delta = new GymLeagueDelta();
    this.model = plainToClass(GymLeague, model);
  }

  showErrorMessage(error) {
    this.messageBox.clear();
    if (error.error.errors !== undefined) {
      let messages = error.error.errors.map(message => {
        return `Field "${message.field}": ${message.defaultMessage}.`;
      });
      this.messageBox.showErrorArray(`GymLeague could not be ${this.editType}d.`, messages);
    }
    else {
      this.messageBox.showError(`GymLeague could not be ${this.editType}d. Error: ${error.error.message}`);
    }
  }

  detectChanges() {
    return !this.delta.isEmpty();
  }

}
