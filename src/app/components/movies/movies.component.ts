import { Component, effect } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute, RouterModule, RouterLink } from '@angular/router';

@Component({
  selector: 'app-movies',
  imports: [HeaderComponent, RouterModule, RouterLink],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent {
  movieId: string | null = null;
  movie: any;

  constructor(
    public movieService: MoviesService,
    private route: ActivatedRoute
  ) {
    //Fetch movies
    this.movieService.fetchMovies();
    console.log('fetched movies:', this.movieService.movies());

    //Get movies by id for movie details
    this.movieId = this.route.snapshot.paramMap.get('id');
    const movies = this.movieService.movies();
    this.movie = movies.find((movie) => movie.id === Number(this.movieId));
  }
}
