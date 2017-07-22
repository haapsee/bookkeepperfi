import { TestBed, inject } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculatorService]
    });
  });

  it('should ...', inject([CalculatorService], (service: CalculatorService) => {
    expect(service).toBeTruthy();
  }));
});
