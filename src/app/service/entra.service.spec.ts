import { TestBed } from '@angular/core/testing';

import { EntraService } from './entra.service';

describe('EntraService', () => {
  let service: EntraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
