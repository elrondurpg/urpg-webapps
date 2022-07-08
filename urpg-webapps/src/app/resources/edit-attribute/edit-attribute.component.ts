import { Component, EventEmitter, forwardRef, Input, OnInit, Output, Provider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { EditPaneAttribute } from 'src/app/models/EditPaneAttribute';

@Component({
  selector: 'resources-edit-attribute',
  templateUrl: './edit-attribute.component.html',
  styleUrls: ['./edit-attribute.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EditAttributeComponent),
      multi: true
    }
  ]
})
export class EditAttributeComponent implements ControlValueAccessor, OnInit {

  @Input() attributeDefinition:EditPaneAttribute;
  @Input() currentValue:string = undefined;
  @Input() editType:string = undefined;

  private _updatedValue: any = '';
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
    if (value != null && value.trim() == "")
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