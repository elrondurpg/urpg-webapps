import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersPaneComponent } from './characters-pane.component';

describe('CharactersPaneComponent', () => {
  let component: CharactersPaneComponent;
  let fixture: ComponentFixture<CharactersPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharactersPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
