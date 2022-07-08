import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { EditPaneAttribute } from 'src/app/models/EditPaneAttribute';

@Component({
  selector: 'resources-v2-edit-attribute-select',
  templateUrl: './edit-attribute-select.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EditAttributeSelectComponent),
      multi: true
    }
  ]
})
export class EditAttributeSelectComponent implements ControlValueAccessor, OnInit {

  @Input() attributeDefinition:EditPaneAttribute;
  @Input() currentValue:string = undefined;
  @Input() editType:string = undefined;

  private _updatedValue: any = undefined;
  get updatedValue(): any { return this._updatedValue; };

  set updatedValue(v: any) {
    if (v !== this._updatedValue) {
      this.writeValue(v);
    }
  }

  constructor() { }

  ngOnInit() {
  }

  writeValue(value: any) {
    if ((value != null && value.trim() == "") || value == "undefined")
    {
      value = undefined;
    }
    this._updatedValue = value;
    this.onChange(value);
  }

  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  onChange = (_) => {};
  onTouched = () => {};
  registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
}