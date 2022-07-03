import { TestBed } from '@angular/core/testing';

import { StoryRankService } from './story-rank.service';

describe('StoryRankService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoryRankService = TestBed.get(StoryRankService);
    expect(service).toBeTruthy();
  });
});
