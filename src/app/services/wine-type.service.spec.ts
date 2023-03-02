import { TestBed } from '@angular/core/testing';

import { WineTypeService } from './wine-type.service';

describe('WineTypeService', () => {
  let service: WineTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WineTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
