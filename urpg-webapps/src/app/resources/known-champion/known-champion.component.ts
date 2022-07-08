import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { plainToClass } from 'class-transformer';
import { KnownChampion } from 'src/app/models/gym/KnownChampion';
import { ActivatedRoute } from '@angular/router';
import { KnownChampionDelta } from 'src/app/models/gym/KnownChampionDelta';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'resources-known-champion',
  templateUrl: './known-champion.component.html',
  styleUrls: ['./known-champion.component.css']
})
export class KnownChampionComponent implements OnInit {
  api = "/knownChampion";

  names = [];
  model:KnownChampion = undefined;
  delta = new KnownChampionDelta();
  editType = "update";

  @ViewChild('messageBox', {static: false})
  messageBox:MessageComponent;

  constructor(
    private route: ActivatedRoute,
    private service : RestService
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
    this.service.get(this.api).subscribe(names => this.names = names);
  }

  create() {
    this.editType = "create";
    this.delta = new KnownChampionDelta();
  }

  findByName(name) {
    this.editType = "update";
    this.delta = new KnownChampionDelta();
    this.service.getByPathParam(this.api, name).subscribe(model => {
      this.model = plainToClass(KnownChampion, model);
      console.log(this.model);
    });
  }

  save() {
    console.log(this.delta);
    if (this.editType == "update") {
      this.service.put(this.api, this.model.dbid, this.delta).subscribe(
        model => this.showSuccessMessage(model),
        error => this.showErrorMessage(error));
    }
    else if (this.editType == "create") {
      this.service.post(this.api, this.delta).subscribe(
        model => this.showSuccessMessage(model),
        error => this.showErrorMessage(error)
      );
    }
  }

  showSuccessMessage(model) {
    this.loadNames();
    this.messageBox.clear();
    this.messageBox.showSuccess(`KnownChampion ${this.editType}d successfully!`);
    this.editType = "update";
    this.delta = new KnownChampionDelta();
    this.model = plainToClass(KnownChampion, model);
  }

  showErrorMessage(error) {
    this.messageBox.clear();
    if (error.error.errors !== undefined) {
      let messages = error.error.errors.map(message => {
        return `Field "${message.field}": ${message.defaultMessage}.`;
      });
      this.messageBox.showErrorArray(`KnownChampion could not be ${this.editType}d.`, messages);
    }
    else {
      this.messageBox.showError(`KnownChampion could not be ${this.editType}d. Error: ${error.error.message}`);
    }
  }

  detectChanges() {
    return !this.delta.isEmpty();
  }

}
