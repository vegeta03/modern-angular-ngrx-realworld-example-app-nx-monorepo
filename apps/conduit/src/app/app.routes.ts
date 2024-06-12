import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'register',
    loadComponent: () =>
      import('@realword/auth/feature-register').then(
        (c) => c.FeatureRegisterComponent
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('@realword/auth/feature-login').then(
        (c) => c.FeatureLoginComponent
      ),
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];
