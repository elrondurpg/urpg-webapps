import { TestBed } from '@angular/core/testing';

import { ObtainedService } from './obtained.service';

describe('ObtainedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObtainedService = TestBed.get(ObtainedService);
    expect(service).toBeTruthy();
  });
});
