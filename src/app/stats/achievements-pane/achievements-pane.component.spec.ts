import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementsPaneComponent } from './achievements-pane.component';

describe('AchievementsPaneComponent', () => {
  let component: AchievementsPaneComponent;
  let fixture: ComponentFixture<AchievementsPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchievementsPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchievementsPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
