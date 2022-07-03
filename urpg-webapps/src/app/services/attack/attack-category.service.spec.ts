import { TestBed } from '@angular/core/testing';

import { AttackCategoryService } from './attack-category.service';

describe('AttackCategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AttackCategoryService = TestBed.get(AttackCategoryService);
    expect(service).toBeTruthy();
  });
});
