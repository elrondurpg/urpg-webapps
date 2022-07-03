import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryRankComponent } from './story-rank.component';

describe('StoryRankComponent', () => {
  let component: StoryRankComponent;
  let fixture: ComponentFixture<StoryRankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryRankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
