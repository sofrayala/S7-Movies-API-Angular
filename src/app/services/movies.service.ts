import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { MovieInterface } from '../interfaces/movie-interface';
import { MovieApiResponse } from '../interfaces/movie-api-response';
import { inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  movies = signal<MovieInterface[]>([]);
  isLoading = signal<boolean>(false);

  constructor(private http: HttpClient) {}

  fetchMovies(): void {
    this.isLoading.set(true);

    this.http
      .get<MovieApiResponse>(
        `${environment.apiUrl}discover/movie?api_key=${environment.api_key}`
      )
      .subscribe({
        next: (response) => {
          this.movies.set(response.results);
          this.isLoading.set(false);
        },
        error: (err) => {
          console.log(`Failed fetching movies`, err);
          this.isLoading.set(false);
        },
      });
  }

  getMovieById(id: number): MovieInterface | undefined {
    return this.movies().find((movie) => movie.id === id);
  }
}
