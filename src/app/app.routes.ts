import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MoviesDetailsComponent } from './components/movies-details/movies-details.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

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

  { path: 'home', component: HomeComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];
