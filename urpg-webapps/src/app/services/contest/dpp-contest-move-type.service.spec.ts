import { TestBed } from '@angular/core/testing';

import { DppContestMoveTypeService } from './dpp-contest-move-type.service';

describe('DppContestMoveTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DppContestMoveTypeService = TestBed.get(DppContestMoveTypeService);
    expect(service).toBeTruthy();
  });
});
