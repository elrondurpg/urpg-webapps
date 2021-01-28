import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegendariesComponent } from './legendaries.component';

describe('LegendariesComponent', () => {
  let component: LegendariesComponent;
  let fixture: ComponentFixture<LegendariesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegendariesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegendariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
