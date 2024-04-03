import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.component'),
  },
  {
    path: 'movie/:id',
    loadComponent: () => import('./movie-details/movie-details.component'),
  },
  {
    path: 'favorites',
    loadComponent: () => import('./favorites/favorites.component'),
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];
