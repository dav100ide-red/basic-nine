import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { checkTabIdResolver } from './check-tab-id.resolver';

describe('checkTabIdResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => checkTabIdResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
