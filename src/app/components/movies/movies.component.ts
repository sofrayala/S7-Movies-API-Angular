import { Component, effect } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies',
  imports: [HeaderComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent {
  constructor(public movieService: MoviesService) {
    this.movieService.fetchMovies();
    console.log('fetched movies:', this.movieService.movies());

    // effect(() => {
    //   console.log('fetched movies:', this.movieService.movies());
    // });
  }
}
