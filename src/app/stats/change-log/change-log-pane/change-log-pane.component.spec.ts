import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeLogPaneComponent } from './change-log-pane.component';

describe('ChangeLogPaneComponent', () => {
  let component: ChangeLogPaneComponent;
  let fixture: ComponentFixture<ChangeLogPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeLogPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeLogPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
