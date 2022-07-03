import { Component, EventEmitter, forwardRef, Input, OnInit, Output, Provider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: 'resources-accordion-attribute-number',
  templateUrl: './accordion-attribute-number.component.html',
  styleUrls: ['./accordion-attribute-number.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AccordionAttributeNumberComponent),
      multi: true
    }
  ]
})
export class AccordionAttributeNumberComponent implements ControlValueAccessor, OnInit {

  @Input() field = undefined;
  @Input() isNew = false;
  @Input() minvalue:number = undefined;
  @Input() maxvalue:number = undefined;
  @Input() step:number = 1;

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
