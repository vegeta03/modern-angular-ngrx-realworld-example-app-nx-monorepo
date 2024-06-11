import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'login',
    loadComponent: () =>
      import('@realword/auth/feature-auth').then((c) => c.LoginComponent),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('@realword/auth/feature-auth').then((c) => c.RegisterComponent),
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];
