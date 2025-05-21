import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MoviesDetailsComponent } from './components/movies-details/movies-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'movies',
    children: [
      {
        path: '',
        component: MoviesComponent,
      },
      {
        path: 'movies-detail/:id',
        component: MoviesDetailsComponent,
      },
    ],
  },
];
