import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ParkLocationService } from 'src/app/services/creative/park-location.service';
import { plainToClass } from 'class-transformer';
import { ParkLocation } from 'src/app/models/creative/ParkLocation';
import { ActivatedRoute } from '@angular/router';
import { ParkLocationDelta } from 'src/app/models/creative/ParkLocationDelta';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'resources-park-location',
  templateUrl: './park-location.component.html',
  styleUrls: ['./park-location.component.css']
})
export class ParkLocationComponent implements OnInit {

  names = [];
  model:ParkLocation = undefined;
  delta = new ParkLocationDelta();
  editType = "update";

  @ViewChild('messageBox', {static: false})
  messageBox:MessageComponent;

  constructor(
    private route: ActivatedRoute,
    private service : ParkLocationService
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
    this.delta = new ParkLocationDelta();
  }

  findByName(name) {
    this.editType = "update";
    this.delta = new ParkLocationDelta();
    this.service.findByName(name).subscribe(model => {
      this.model = plainToClass(ParkLocation, model);
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
    this.messageBox.showSuccess(`ParkLocation ${this.editType}d successfully!`);
    this.editType = "update";
    this.delta = new ParkLocationDelta();
    this.model = plainToClass(ParkLocation, model);
  }

  showErrorMessage(error) {
    this.messageBox.clear();
    if (error.error.errors !== undefined) {
      let messages = error.error.errors.map(message => {
        return `Field "${message.field}": ${message.defaultMessage}.`;
      });
      this.messageBox.showErrorArray(`ParkLocation could not be ${this.editType}d.`, messages);
    }
    else {
      this.messageBox.showError(`ParkLocation could not be ${this.editType}d. Error: ${error.error.message}`);
    }
  }

  detectChanges() {
    return !this.delta.isEmpty();
  }

}
