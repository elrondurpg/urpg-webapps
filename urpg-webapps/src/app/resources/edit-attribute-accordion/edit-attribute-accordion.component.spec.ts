import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAttributeAccordionComponent } from './edit-attribute-accordion.component';

describe('EditAttributeAccordionComponent', () => {
  let component: EditAttributeAccordionComponent;
  let fixture: ComponentFixture<EditAttributeAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAttributeAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAttributeAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
