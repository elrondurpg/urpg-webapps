import { Component, EventEmitter, forwardRef, Input, OnInit, Output, Provider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: 'resources-edit-attribute-select',
  templateUrl: './edit-attribute-select.component.html',
  styleUrls: ['./edit-attribute-select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EditAttributeSelectComponent),
      multi: true
    }
  ]
})
export class EditAttributeSelectComponent implements ControlValueAccessor, OnInit {

  @Input() attribute:string = undefined;
  @Input() currentValue:string = undefined;
  @Input() required:boolean = false;
  @Input() editType:string = undefined;
  @Input() items:string[] = [];

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