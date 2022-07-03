import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SectionService } from 'src/app/services/general/section.service';
import { plainToClass } from 'class-transformer';
import { Section } from 'src/app/models/general/Section';
import { ActivatedRoute } from '@angular/router';
import { SectionDelta } from 'src/app/models/general/SectionDelta';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'resources-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  names = [];
  model:Section = undefined;
  delta = new SectionDelta();
  editType = "update";

  @ViewChild('messageBox', {static: false})
  messageBox:MessageComponent;

  constructor(
    private route: ActivatedRoute,
    private service : SectionService
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
    this.delta = new SectionDelta();
  }

  findByName(name) {
    this.editType = "update";
    this.delta = new SectionDelta();
    this.service.findByName(name).subscribe(model => {
      this.model = plainToClass(Section, model);
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
    this.messageBox.showSuccess(`Section ${this.editType}d successfully!`);
    this.editType = "update";
    this.delta = new SectionDelta();
    this.model = plainToClass(Section, model);
  }

  showErrorMessage(error) {
    this.messageBox.clear();
    if (error.error.errors !== undefined) {
      let messages = error.error.errors.map(message => {
        return `Field "${message.field}": ${message.defaultMessage}.`;
      });
      this.messageBox.showErrorArray(`Section could not be ${this.editType}d.`, messages);
    }
    else {
      this.messageBox.showError(`Section could not be ${this.editType}d. Error: ${error.error.message}`);
    }
  }

  detectChanges() {
    return !this.delta.isEmpty();
  }

}
