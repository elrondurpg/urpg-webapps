import { Component, Input, OnInit } from '@angular/core';
import { EditPaneDataDefinition } from 'src/app/models/EditPaneDataDefinition';
import { ObjectDelta } from 'src/app/models/ObjectDelta';
import { UrpgObjectModel } from 'src/app/models/ObjectModel';

@Component({
  selector: 'resources-edit-pane',
  templateUrl: './edit-pane.component.html',
  styleUrls: ['./edit-pane.component.css']
})
export class EditPaneComponent implements OnInit {

  @Input() editType:string;
  @Input() dataDefinition:EditPaneDataDefinition;
  @Input() model:UrpgObjectModel;
  @Input() delta:ObjectDelta;

  showInstructions = true;

  constructor() { }

  ngOnInit() {
  }

  toggleInstructions() {
    this.showInstructions = !this.showInstructions;
  }

  getCurrentModelValue(selector) {
    if (selector == null) {
      return null;
    }

    let tokens = selector.split("\.");
    let curr = this.model;
    for (let i = 0; i < tokens.length; i++) {
      if (curr != null) {
        curr = curr[tokens[i]];
      }
    }
    return curr;
  }

}
