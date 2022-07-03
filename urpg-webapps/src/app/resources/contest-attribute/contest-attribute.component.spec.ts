import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestAttributeComponent } from './contest-attribute.component';

describe('ContestAttributeComponent', () => {
  let component: ContestAttributeComponent;
  let fixture: ComponentFixture<ContestAttributeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContestAttributeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContestAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
