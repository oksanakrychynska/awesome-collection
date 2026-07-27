import { Routes } from '@angular/router';
import {CollectionDetails} from './features/collections/collection-details/collection-details';
import {authGuard} from './core/auth/auth.guard';

export const routes: Routes = [
  {
    path: 'collections',
    canActivate: [authGuard],
    loadComponent: () => import('./features/collections/collections').then(m => m.Collections),
  },
  {
    path: 'books',
    canActivate: [authGuard],
    loadComponent: () => import('./features/books/ui/books/books').then(m => m.Books),
  },
  {
    path: 'collections/:id',
    canActivate: [authGuard],
    component: CollectionDetails,
  },
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login/login').then(m => m.Login),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'books',
  },
];
