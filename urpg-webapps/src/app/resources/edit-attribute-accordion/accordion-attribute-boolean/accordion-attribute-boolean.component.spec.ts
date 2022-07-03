import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionAttributeBooleanComponent } from './accordion-attribute-boolean.component';

describe('AccordionAttributeBooleanComponent', () => {
  let component: AccordionAttributeBooleanComponent;
  let fixture: ComponentFixture<AccordionAttributeBooleanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionAttributeBooleanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionAttributeBooleanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
