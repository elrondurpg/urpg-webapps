import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchHistoryPaneComponent } from './match-history-pane.component';

describe('MatchHistoryPaneComponent', () => {
  let component: MatchHistoryPaneComponent;
  let fixture: ComponentFixture<MatchHistoryPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchHistoryPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchHistoryPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
