import { TestBed } from '@angular/core/testing';

import { FilmApiService } from './film-api.service';

describe('FilmApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilmApiService = TestBed.get(FilmApiService);
    expect(service).toBeTruthy();
  });
});
