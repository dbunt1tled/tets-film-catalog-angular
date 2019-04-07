import { TestBed } from '@angular/core/testing';

import { FilmInterceptorService } from './film-interceptor.service';

describe('FilmInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilmInterceptorService = TestBed.get(FilmInterceptorService);
    expect(service).toBeTruthy();
  });
});
