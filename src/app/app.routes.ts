import { Routes } from '@angular/router';
import { AuthGuard } from '@angular/fire/auth-guard';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MoviesDetailsComponent } from './components/movies-details/movies-details.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'movies',
    canActivate: [authGuard],
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

  // { path: 'movies', component: MoviesComponent, canActivate: [authGuard] },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '' },
];
