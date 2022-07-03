import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkRankComponent } from './park-rank.component';

describe('ParkRankComponent', () => {
  let component: ParkRankComponent;
  let fixture: ComponentFixture<ParkRankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkRankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
