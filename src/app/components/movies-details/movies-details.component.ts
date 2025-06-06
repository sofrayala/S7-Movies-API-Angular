import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { MovieInterface } from '../../interfaces/movie-interface';
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'app-movies-details',
  imports: [HeaderComponent],
  templateUrl: './movies-details.component.html',
  styleUrl: './movies-details.component.css',
})
export class MoviesDetailsComponent {
  movie = signal<MovieInterface | undefined>(undefined);

  constructor(
    private route: ActivatedRoute,
    private movieService: MoviesService
  ) {
    const movieId = this.route.snapshot.paramMap.get('id');
    if (movieId) {
      const found = this.movieService.getMovieById(Number(movieId));
      this.movie.set(found);

      this.movieService.fetchMovieCast(Number(movieId));
    }
  }

  get cast() {
    return this.movieService.cast();
  }
}
