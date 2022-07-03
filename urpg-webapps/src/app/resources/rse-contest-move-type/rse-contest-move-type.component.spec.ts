import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RseContestMoveTypeComponent } from './rse-contest-move-type.component';

describe('RseContestMoveTypeComponent', () => {
  let component: RseContestMoveTypeComponent;
  let fixture: ComponentFixture<RseContestMoveTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RseContestMoveTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RseContestMoveTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
