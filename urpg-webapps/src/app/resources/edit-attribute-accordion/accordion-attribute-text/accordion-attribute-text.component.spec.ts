import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionAttributeTextComponent } from './accordion-attribute-text.component';

describe('AccordionAttributeTextComponent', () => {
  let component: AccordionAttributeTextComponent;
  let fixture: ComponentFixture<AccordionAttributeTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionAttributeTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionAttributeTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
