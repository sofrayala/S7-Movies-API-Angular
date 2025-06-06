import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { MovieInterface } from '../interfaces/movie-interface';
import { MovieApiResponse } from '../interfaces/movie-api-response';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  movies = signal<MovieInterface[]>([]);
  cast = signal<any[]>([]);

  isLoading = signal<boolean>(false);
  currentPage = signal<number>(1);
  totalPages = signal<number>(1);

  constructor(private http: HttpClient) {}

  fetchMovies(): void {
    this.isLoading.set(true);

    this.http
      .get<MovieApiResponse>(
        `${environment.tmbd.apiUrl}discover/movie?api_key=${
          environment.tmbd.api_key
        }&page=${this.currentPage()}`
      )
      .subscribe({
        next: (response) => {
          this.movies.set(response.results);
          this.isLoading.set(false);
          this.totalPages.set(response.total_pages);
        },
        error: (err) => {
          alert(`Failed fetching movies`);
          this.isLoading.set(false);
        },
      });
  }

  getMovieById(id: number): MovieInterface | undefined {
    return this.movies().find((movie) => movie.id === id);
  }
  fetchMovieCast(movieId: number) {
    return this.http
      .get<{ cast: any[] }>(
        `${environment.tmbd.apiUrl}movie/${movieId}/credits?api_key=${environment.tmbd.api_key}`
      )
      .subscribe({
        next: (res) => this.cast.set(res.cast ?? []),
        error: () => this.cast.set([]),
      });
  }

  nextPage(): void {
    if (this.currentPage() < this.totalPages()) {
      this.currentPage.update((page) => page + 1);
      this.fetchMovies();
    }
  }

  prevPage() {
    if (this.currentPage() > 1) {
      this.currentPage.update((page) => page - 1);
      this.fetchMovies();
    }
  }
}
