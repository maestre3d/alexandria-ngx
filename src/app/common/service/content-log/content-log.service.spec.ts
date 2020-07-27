import { TestBed } from '@angular/core/testing';

import { ContentLogService } from './content-log.service';

describe('ContentLogService', () => {
  let service: ContentLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
