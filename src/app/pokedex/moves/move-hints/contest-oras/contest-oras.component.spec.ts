import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestOrasComponent } from './contest-oras.component';

describe('ContestOrasComponent', () => {
  let component: ContestOrasComponent;
  let fixture: ComponentFixture<ContestOrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContestOrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContestOrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
