import { Component, EventEmitter, forwardRef, Input, OnInit, Output, Provider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: 'resources-accordion-attribute-select',
  templateUrl: './accordion-attribute-select.component.html',
  styleUrls: ['./accordion-attribute-select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AccordionAttributeSelectComponent),
      multi: true
    }
  ]
})
export class AccordionAttributeSelectComponent implements ControlValueAccessor, OnInit {

  @Input() field = undefined;
  @Input() isNew = false;
  @Input() items:string[];

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
      else if (value != null)
      {
        value = value.trim();
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
