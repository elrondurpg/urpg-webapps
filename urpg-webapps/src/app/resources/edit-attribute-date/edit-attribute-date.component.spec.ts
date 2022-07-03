import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAttributeDateComponent } from './edit-attribute-date.component';

describe('EditAttributeDateComponent', () => {
  let component: EditAttributeDateComponent;
  let fixture: ComponentFixture<EditAttributeDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAttributeDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAttributeDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
