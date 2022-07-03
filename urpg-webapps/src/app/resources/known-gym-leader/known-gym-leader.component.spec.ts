import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnownGymLeaderComponent } from './known-gym-leader.component';

describe('KnownGymLeaderComponent', () => {
  let component: KnownGymLeaderComponent;
  let fixture: ComponentFixture<KnownGymLeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnownGymLeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnownGymLeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
