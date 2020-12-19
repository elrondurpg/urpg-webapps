import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsibleMessageComponent } from './collapsible-message.component';

describe('CollapsibleMessageComponent', () => {
  let component: CollapsibleMessageComponent;
  let fixture: ComponentFixture<CollapsibleMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapsibleMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapsibleMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
