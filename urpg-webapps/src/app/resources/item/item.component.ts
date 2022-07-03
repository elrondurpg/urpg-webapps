import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ItemService } from 'src/app/services/item/item.service';
import { plainToClass } from 'class-transformer';
import { Item } from 'src/app/models/item/Item';
import { ActivatedRoute } from '@angular/router';
import { ItemDelta } from 'src/app/models/item/ItemDelta';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'resources-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  names = [];
  model:Item = undefined;
  delta = new ItemDelta();
  editType = "update";
  itemTypes = [ "Berry", "Contest", "Evolution", "Fossil", "Held", "HM", "Mail", "Mega", "Other", "Special", "TM", "ZCrystal" ];

  @ViewChild('messageBox', {static: false})
  messageBox:MessageComponent;

  constructor(
    private route: ActivatedRoute,
    private service : ItemService
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
    this.delta = new ItemDelta();
  }

  findByName(name) {
    this.editType = "update";
    this.delta = new ItemDelta();
    this.service.findByName(name).subscribe(model => {
      this.model = plainToClass(Item, model);
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
    this.messageBox.showSuccess(`Item ${this.editType}d successfully!`);
    this.editType = "update";
    this.delta = new ItemDelta();
    this.model = plainToClass(Item, model);
  }

  showErrorMessage(error) {
    this.messageBox.clear();
    if (error.error.errors !== undefined) {
      let messages = error.error.errors.map(message => {
        return `Field "${message.field}": ${message.defaultMessage}.`;
      });
      this.messageBox.showErrorArray(`Item could not be ${this.editType}d.`, messages);
    }
    else {
      this.messageBox.showError(`Item could not be ${this.editType}d. Error: ${error.error.message}`);
    }
  }

  detectChanges() {
    return !this.delta.isEmpty();
  }

}
