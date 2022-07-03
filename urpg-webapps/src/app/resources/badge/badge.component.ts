import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { plainToClass } from 'class-transformer';
import { Badge } from 'src/app/models/gym/Badge';
import { BadgeDelta } from 'src/app/models/gym/BadgeDelta';
import { BadgeService } from 'src/app/services/gym/badge.service';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'resources-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent implements OnInit {
  names:string[] = [];
  model:Badge = undefined;
  delta:BadgeDelta = new BadgeDelta();
  editType = "update";

  @ViewChild('messageBox', {static: false})
  messageBox:MessageComponent;

  constructor(
    private route: ActivatedRoute,
    private service:BadgeService
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
    this.delta = new BadgeDelta();
  }

  findByName(name) {
    this.editType = "update";
    this.delta = new BadgeDelta();
    this.service.findByName(name).subscribe(model => {
      this.model = plainToClass(Badge, model);
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
    this.messageBox.showSuccess(`Badge ${this.editType}d successfully!`);
    this.editType = "update";
    this.delta = new BadgeDelta();
    this.model = plainToClass(Badge, model);
  }

  showErrorMessage(error) {
    this.messageBox.clear();
    if (error.error.errors !== undefined) {
      let messages = error.error.errors.map(message => {
        return `Field "${message.field}": ${message.defaultMessage}.`;
      });
      this.messageBox.showErrorArray(`Badge could not be ${this.editType}d.`, messages);
    }
    else {
      this.messageBox.showError(`Badge could not be ${this.editType}d. Error: ${error.error.message}`);
    }
  }

  detectChanges() {
    return !this.delta.isEmpty();
  }

}
