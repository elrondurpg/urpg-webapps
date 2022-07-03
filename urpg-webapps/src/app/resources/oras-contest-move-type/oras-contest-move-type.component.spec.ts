import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrasContestMoveTypeComponent } from './oras-contest-move-type.component';

describe('OrasContestMoveTypeComponent', () => {
  let component: OrasContestMoveTypeComponent;
  let fixture: ComponentFixture<OrasContestMoveTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrasContestMoveTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrasContestMoveTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
