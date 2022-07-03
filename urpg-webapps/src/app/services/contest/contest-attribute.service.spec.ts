import { TestBed } from '@angular/core/testing';

import { ContestAttributeService } from './contest-attribute.service';

describe('ContestAttributeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContestAttributeService = TestBed.get(ContestAttributeService);
    expect(service).toBeTruthy();
  });
});
