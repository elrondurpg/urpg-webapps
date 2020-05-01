import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GymsPaneComponent } from './gyms-pane.component';

describe('GymsPaneComponent', () => {
  let component: GymsPaneComponent;
  let fixture: ComponentFixture<GymsPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GymsPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GymsPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
