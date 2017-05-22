import { TestBed, inject } from '@angular/core/testing';

import { LanpackService } from './lanpack.service';

describe('LanpackService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LanpackService]
    });
  });

  it('should ...', inject([LanpackService], (service: LanpackService) => {
    expect(service).toBeTruthy();
  }));
});
