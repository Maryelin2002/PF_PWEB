import { TestBed } from '@angular/core/testing';

import { MedicalServiceService } from './medical-service.service';

describe('MedicalServiceService', () => {
  let service: MedicalServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicalServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
