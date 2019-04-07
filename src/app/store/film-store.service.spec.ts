import { TestBed } from '@angular/core/testing';

import { FilmStoreService } from './film-store.service';

describe('FilmStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilmStoreService = TestBed.get(FilmStoreService);
    expect(service).toBeTruthy();
  });
});
