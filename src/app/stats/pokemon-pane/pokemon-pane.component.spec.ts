import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonPaneComponent } from './pokemon-pane.component';

describe('PokemonPaneComponent', () => {
  let component: PokemonPaneComponent;
  let fixture: ComponentFixture<PokemonPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
