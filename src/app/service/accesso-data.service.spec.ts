import { TestBed } from '@angular/core/testing';

import { AccessoDataService } from './accesso-data.service';
import { describe, beforeEach, it } from 'node:test';

describe('AccessoDataService', () => {
  let service: AccessoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
