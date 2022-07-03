import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAttributeHeaderComponent } from './edit-attribute-header.component';

describe('EditAttributeHeaderComponent', () => {
  let component: EditAttributeHeaderComponent;
  let fixture: ComponentFixture<EditAttributeHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAttributeHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAttributeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
