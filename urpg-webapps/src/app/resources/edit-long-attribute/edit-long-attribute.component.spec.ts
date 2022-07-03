import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLongAttributeComponent } from './edit-long-attribute.component';

describe('EditLongAttributeComponent', () => {
  let component: EditLongAttributeComponent;
  let fixture: ComponentFixture<EditLongAttributeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLongAttributeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLongAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
