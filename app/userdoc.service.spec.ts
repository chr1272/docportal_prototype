import { TestBed } from '@angular/core/testing';

import { UserdocService } from './userdoc.service';

describe('UserdocService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserdocService = TestBed.get(UserdocService);
    expect(service).toBeTruthy();
  });
});
