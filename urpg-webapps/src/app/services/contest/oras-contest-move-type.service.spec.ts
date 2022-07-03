import { TestBed } from '@angular/core/testing';

import { OrasContestMoveTypeService } from './oras-contest-move-type.service';

describe('OrasContestMoveTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrasContestMoveTypeService = TestBed.get(OrasContestMoveTypeService);
    expect(service).toBeTruthy();
  });
});
