import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttackTargetTypeComponent } from './attack-target-type.component';

describe('AttackTargetTypeComponent', () => {
  let component: AttackTargetTypeComponent;
  let fixture: ComponentFixture<AttackTargetTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttackTargetTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttackTargetTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
