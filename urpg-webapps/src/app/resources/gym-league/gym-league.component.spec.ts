import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GymLeagueComponent } from './gym-league.component';

describe('GymLeagueComponent', () => {
  let component: GymLeagueComponent;
  let fixture: ComponentFixture<GymLeagueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GymLeagueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GymLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
