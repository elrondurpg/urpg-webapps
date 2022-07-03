import { Component, EventEmitter, forwardRef, Input, OnInit, Output, Provider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: 'resources-edit-attribute-number',
  templateUrl: './edit-attribute-number.component.html',
  styleUrls: ['./edit-attribute-number.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EditAttributeNumberComponent),
      multi: true
    }
  ]
})
export class EditAttributeNumberComponent implements ControlValueAccessor, OnInit {

  @Input() attribute:string = undefined;
  @Input() currentValue:string = undefined;
  @Input() required:boolean = false;
  @Input() editType:string = undefined;
  @Input() minvalue:number = undefined;
  @Input() maxvalue:number = undefined;
  @Input() step:number = 1;

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
    if (value == null)
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