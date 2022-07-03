import { TestBed } from '@angular/core/testing';

import { AttackTargetTypeService } from './attack-target-type.service';

describe('AttackTargetTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AttackTargetTypeService = TestBed.get(AttackTargetTypeService);
    expect(service).toBeTruthy();
  });
});
