import { Component, EventEmitter, forwardRef, Input, OnInit, Output, Provider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: 'resources-accordion-attribute-boolean',
  templateUrl: './accordion-attribute-boolean.component.html',
  styleUrls: ['./accordion-attribute-boolean.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AccordionAttributeBooleanComponent),
      multi: true
    }
  ]
})
export class AccordionAttributeBooleanComponent implements ControlValueAccessor, OnInit {

  @Input() field = undefined;
  @Input() isNew = false;

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
    if (typeof value == "string") {
      if ((value != null && value.trim() == "") || value == "undefined")
      {
        value = undefined;
      }
      else if ((value != null && value.trim() == "true"))
      {
        value = true;
      }
      else if ((value != null && value.trim() == "false"))
      {
        value = false;
      }
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
