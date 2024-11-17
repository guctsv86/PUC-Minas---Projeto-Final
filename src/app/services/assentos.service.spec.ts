import { TestBed } from '@angular/core/testing';

import { AssentosService } from './assentos.service';

describe('AssentosService', () => {
  let service: AssentosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssentosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
