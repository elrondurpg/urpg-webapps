import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsMenuBarComponent } from './stats-menu-bar.component';

describe('StatsMenuBarComponent', () => {
  let component: StatsMenuBarComponent;
  let fixture: ComponentFixture<StatsMenuBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsMenuBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsMenuBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
