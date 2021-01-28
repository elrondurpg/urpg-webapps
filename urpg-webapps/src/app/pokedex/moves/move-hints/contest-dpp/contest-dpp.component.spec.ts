import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestDppComponent } from './contest-dpp.component';

describe('ContestDppComponent', () => {
  let component: ContestDppComponent;
  let fixture: ComponentFixture<ContestDppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContestDppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContestDppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
