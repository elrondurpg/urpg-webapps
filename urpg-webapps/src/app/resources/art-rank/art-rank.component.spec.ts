import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtRankComponent } from './art-rank.component';

describe('ArtRankComponent', () => {
  let component: ArtRankComponent;
  let fixture: ComponentFixture<ArtRankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtRankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
