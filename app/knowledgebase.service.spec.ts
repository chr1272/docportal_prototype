import { TestBed } from '@angular/core/testing';

import { KnowledgebaseService } from './knowledgebase.service';

describe('KnowledgebaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KnowledgebaseService = TestBed.get(KnowledgebaseService);
    expect(service).toBeTruthy();
  });
});
