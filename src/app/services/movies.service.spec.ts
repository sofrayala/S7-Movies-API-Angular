import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(MoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a movie by id using getMovieById', () => {
    const testMovie = { id: 123, title: 'Test Movie' } as any;
    service.movies.set([testMovie]);

    const result = service.getMovieById(123);

    expect(result).toEqual(testMovie);
  });
});
