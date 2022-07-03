import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionAttributeSelectComponent } from './accordion-attribute-select.component';

describe('AccordionAttributeSelectComponent', () => {
  let component: AccordionAttributeSelectComponent;
  let fixture: ComponentFixture<AccordionAttributeSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionAttributeSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionAttributeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
