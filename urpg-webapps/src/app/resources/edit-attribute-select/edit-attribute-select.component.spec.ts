import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAttributeSelectComponent } from './edit-attribute-select.component';

describe('EditAttributeSelectComponent', () => {
  let component: EditAttributeSelectComponent;
  let fixture: ComponentFixture<EditAttributeSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAttributeSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAttributeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
