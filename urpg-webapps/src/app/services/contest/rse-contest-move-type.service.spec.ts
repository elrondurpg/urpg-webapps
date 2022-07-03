import { TestBed } from '@angular/core/testing';

import { RseContestMoveTypeService } from './rse-contest-move-type.service';

describe('RseContestMoveTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RseContestMoveTypeService = TestBed.get(RseContestMoveTypeService);
    expect(service).toBeTruthy();
  });
});
