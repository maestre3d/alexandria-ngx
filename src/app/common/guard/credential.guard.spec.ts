import { TestBed } from '@angular/core/testing';

import { CredentialGuard } from './credential.guard';

describe('CredentialGuard', () => {
  let guard: CredentialGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CredentialGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
