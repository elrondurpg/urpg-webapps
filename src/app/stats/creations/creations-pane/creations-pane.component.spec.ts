import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationsPaneComponent } from './creations-pane.component';

describe('CreationsPaneComponent', () => {
  let component: CreationsPaneComponent;
  let fixture: ComponentFixture<CreationsPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationsPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationsPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
