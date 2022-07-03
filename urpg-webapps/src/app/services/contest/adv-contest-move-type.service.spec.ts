import { TestBed } from '@angular/core/testing';

import { AdvContestMoveTypeService } from './adv-contest-move-type.service';

describe('AdvContestMoveTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdvContestMoveTypeService = TestBed.get(AdvContestMoveTypeService);
    expect(service).toBeTruthy();
  });
});
