import { TestBed } from '@angular/core/testing';

import { GetmoviestvService } from './getmoviestv.service';

describe('GetmoviestvService', () => {
  let service: GetmoviestvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetmoviestvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
