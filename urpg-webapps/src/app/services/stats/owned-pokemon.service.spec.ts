import { TestBed } from '@angular/core/testing';

import { OwnedPokemonService } from './owned-pokemon.service';

describe('OwnedPokemonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OwnedPokemonService = TestBed.get(OwnedPokemonService);
    expect(service).toBeTruthy();
  });
});
