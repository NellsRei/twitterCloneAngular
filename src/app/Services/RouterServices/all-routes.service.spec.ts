import { TestBed } from '@angular/core/testing';

import { AllRoutesService } from './all-routes.service';

describe('AllRoutesService', () => {
  let service: AllRoutesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllRoutesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
