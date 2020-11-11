import { TestBed } from '@angular/core/testing';

import { StudentDAOService } from './student-dao.service';

describe('StudentDAOService', () => {
  let service: StudentDAOService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentDAOService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
