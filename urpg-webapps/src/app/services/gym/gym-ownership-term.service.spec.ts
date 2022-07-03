import { TestBed } from '@angular/core/testing';

import { GymOwnershipTermService } from './gym-ownership-term.service';

describe('GymOwnershipTermService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GymOwnershipTermService = TestBed.get(GymOwnershipTermService);
    expect(service).toBeTruthy();
  });
});
