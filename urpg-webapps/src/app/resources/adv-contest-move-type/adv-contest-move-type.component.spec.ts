import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvContestMoveTypeComponent } from './adv-contest-move-type.component';

describe('AdvContestMoveTypeComponent', () => {
  let component: AdvContestMoveTypeComponent;
  let fixture: ComponentFixture<AdvContestMoveTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvContestMoveTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvContestMoveTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
