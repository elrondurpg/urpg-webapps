import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestRseComponent } from './contest-rse.component';

describe('ContestRseComponent', () => {
  let component: ContestRseComponent;
  let fixture: ComponentFixture<ContestRseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContestRseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContestRseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
