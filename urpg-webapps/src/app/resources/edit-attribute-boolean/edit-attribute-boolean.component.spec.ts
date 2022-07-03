import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAttributeBooleanComponent } from './edit-attribute-boolean.component';

describe('EditAttributeBooleanComponent', () => {
  let component: EditAttributeBooleanComponent;
  let fixture: ComponentFixture<EditAttributeBooleanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAttributeBooleanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAttributeBooleanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
