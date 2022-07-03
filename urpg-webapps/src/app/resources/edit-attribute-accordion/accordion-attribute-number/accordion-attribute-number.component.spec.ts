import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionAttributeNumberComponent } from './accordion-attribute-number.component';

describe('AccordionAttributeNumberComponent', () => {
  let component: AccordionAttributeNumberComponent;
  let fixture: ComponentFixture<AccordionAttributeNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionAttributeNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionAttributeNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
