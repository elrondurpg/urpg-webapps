import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AttackCategoryService } from 'src/app/services/attack/attack-category.service';
import { plainToClass } from 'class-transformer';
import { ActivatedRoute } from '@angular/router';
import { AttackCategoryDelta } from 'src/app/models/attack/AttackCategoryDelta';
import { MessageComponent } from '../message/message.component';
import { AttackCategory } from 'src/app/models/attack/AttackCategory';

@Component({
  selector: 'resources-attack-category',
  templateUrl: './attack-category.component.html',
  styleUrls: ['./attack-category.component.css']
})
export class AttackCategoryComponent implements OnInit {

  items = [];
  attackCategory:AttackCategory = undefined;
  delta = new AttackCategoryDelta();
  editType = "update";

  @ViewChild('messageBox', {static: false})
  messageBox:MessageComponent;

  constructor(
    private route: ActivatedRoute,
    private attackCategoryService : AttackCategoryService
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
    this.attackCategoryService.findAllNames().subscribe(attackCategories => this.items = attackCategories);
  }

  create() {
    this.editType = "create";
    this.delta = new AttackCategoryDelta();
  }

  findByName(name) {
    this.editType = "update";
    this.delta = new AttackCategoryDelta();
    this.attackCategoryService.findByName(name).subscribe(attackCategory => {
      this.attackCategory = plainToClass(AttackCategory, attackCategory);
      console.log(this.attackCategory); //TODO REMOVE THIS LINE
    });
  }

  save() {
    console.log(this.delta);
    if (this.editType == "update") {
      this.attackCategoryService.update(this.attackCategory.dbid, this.delta).subscribe(
        attackCategory => this.showSuccessMessage(attackCategory),
        error => this.showErrorMessage(error));
    }
    else if (this.editType == "create") {
      this.attackCategoryService.create(this.delta).subscribe(
        attackCategory => this.showSuccessMessage(attackCategory),
        error => this.showErrorMessage(error)
      );
    }
  }

  showSuccessMessage(attackCategory) {
    this.loadNames();
    this.messageBox.clear();
    this.messageBox.showSuccess(`Attack category ${this.editType}d successfully!`);
    this.editType = "update";
    this.delta = new AttackCategoryDelta();
    this.attackCategory = plainToClass(AttackCategory, attackCategory);
  }

  showErrorMessage(error) {
    this.messageBox.clear();
    if (error.error.errors !== undefined) {
      let messages = error.error.errors.map(message => {
        return `Field "${message.field}": ${message.defaultMessage}.`;
      });
      this.messageBox.showErrorArray(`Attack category could not be ${this.editType}d.`, messages);
    }
    else {
      this.messageBox.showError(`Attack category could not be ${this.editType}d. Error: ${error.error.message}`);
    }
  }

  detectChanges() {
    return !this.delta.isEmpty();
  }

}
