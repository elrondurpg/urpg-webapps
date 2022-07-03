import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAttributeNumberComponent } from './edit-attribute-number.component';

describe('EditAttributeNumberComponent', () => {
  let component: EditAttributeNumberComponent;
  let fixture: ComponentFixture<EditAttributeNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAttributeNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAttributeNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
