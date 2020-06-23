import { TestBed } from '@angular/core/testing';

import { WhatsthatService } from './whatsthat.service';

describe('WhatsthatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WhatsthatService = TestBed.get(WhatsthatService);
    expect(service).toBeTruthy();
  });
});
