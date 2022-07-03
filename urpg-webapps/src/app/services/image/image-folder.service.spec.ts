import { TestBed } from '@angular/core/testing';

import { ImageFolderService } from './image-folder.service';

describe('ImageFolderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImageFolderService = TestBed.get(ImageFolderService);
    expect(service).toBeTruthy();
  });
});
