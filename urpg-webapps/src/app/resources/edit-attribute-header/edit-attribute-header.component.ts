import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'resources-edit-attribute-header',
  templateUrl: './edit-attribute-header.component.html',
  styleUrls: ['./edit-attribute-header.component.css']
})
export class EditAttributeHeaderComponent implements OnInit {

  @Input() editType = undefined;
  @Input() fieldLabel = "Field";
  @Input() currentValueLabel = "Current Value";
  @Input() newValueLabel = "New Value";

  constructor() { }

  ngOnInit() {
    
  }

}
