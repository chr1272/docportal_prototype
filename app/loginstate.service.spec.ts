import { TestBed } from '@angular/core/testing';

import { LoginstateService } from './loginstate.service';

describe('LoginstateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginstateService = TestBed.get(LoginstateService);
    expect(service).toBeTruthy();
  });
});
