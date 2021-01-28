import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveHintsComponent } from './move-hints.component';

describe('MoveHintsComponent', () => {
  let component: MoveHintsComponent;
  let fixture: ComponentFixture<MoveHintsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveHintsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveHintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
