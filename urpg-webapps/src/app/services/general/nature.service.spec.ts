import { TestBed } from '@angular/core/testing';

import { NatureService } from './nature.service';

describe('NatureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NatureService = TestBed.get(NatureService);
    expect(service).toBeTruthy();
  });
});
