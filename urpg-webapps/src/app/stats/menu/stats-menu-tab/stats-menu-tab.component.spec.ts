import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsMenuTabComponent } from './stats-menu-tab.component';

describe('StatsMenuTabComponent', () => {
  let component: StatsMenuTabComponent;
  let fixture: ComponentFixture<StatsMenuTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsMenuTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsMenuTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
