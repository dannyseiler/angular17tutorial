import { OperatingSystemsService } from './operating-systems.service';
import { TestBed } from '@angular/core/testing';

describe('TodoService', () => {
  let service: OperatingSystemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperatingSystemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
