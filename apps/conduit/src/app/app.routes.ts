import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'register',
    loadComponent: () =>
      import('@realword/auth/feature-auth').then((c) => c.RegisterComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('@realword/auth/feature-auth').then((c) => c.LoginComponent),
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];
