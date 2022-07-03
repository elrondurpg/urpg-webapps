import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkLocationComponent } from './park-location.component';

describe('ParkLocationComponent', () => {
  let component: ParkLocationComponent;
  let fixture: ComponentFixture<ParkLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
