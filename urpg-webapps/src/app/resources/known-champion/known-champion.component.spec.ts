import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnownChampionComponent } from './known-champion.component';

describe('KnownChampionComponent', () => {
  let component: KnownChampionComponent;
  let fixture: ComponentFixture<KnownChampionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnownChampionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnownChampionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
