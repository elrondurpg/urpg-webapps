import { Component, Input, OnInit } from '@angular/core';
import { EditPaneDataDefinition } from 'src/app/models/EditPaneDataDefinition';
import { ObjectDelta } from 'src/app/models/ObjectDelta';
import { ObjectModel } from 'src/app/models/ObjectModel';

@Component({
  selector: 'resources-edit-pane',
  templateUrl: './edit-pane.component.html',
  styleUrls: ['./edit-pane.component.css']
})
export class EditPaneComponent implements OnInit {

  @Input() editType:string;
  @Input() dataDefinition:EditPaneDataDefinition;
  @Input() model:ObjectModel;
  @Input() delta:ObjectDelta;

  showInstructions = true;

  constructor() { }

  ngOnInit() {
  }

  toggleInstructions() {
    this.showInstructions = !this.showInstructions;
  }

}
