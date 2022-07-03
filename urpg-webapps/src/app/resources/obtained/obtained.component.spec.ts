import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtainedComponent } from './obtained.component';

describe('ObtainedComponent', () => {
  let component: ObtainedComponent;
  let fixture: ComponentFixture<ObtainedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObtainedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObtainedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
