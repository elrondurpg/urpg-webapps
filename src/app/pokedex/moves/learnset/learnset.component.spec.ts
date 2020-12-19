import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnsetComponent } from './learnset.component';

describe('LearnsetComponent', () => {
  let component: LearnsetComponent;
  let fixture: ComponentFixture<LearnsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnsetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
