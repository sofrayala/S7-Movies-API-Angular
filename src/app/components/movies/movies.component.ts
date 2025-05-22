import { Component } from '@angular/core';
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
  constructor(
    public movieService: MoviesService,
    private route: ActivatedRoute
  ) {
    //Fetch movies
    this.movieService.fetchMovies();
  }

  nextPage() {
    this.movieService.nextPage();
  }

  prevPage() {
    this.movieService.prevPage();
  }
}
