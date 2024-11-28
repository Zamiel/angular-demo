import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'login', loadChildren: () => import('./routes/login/login.module').then(m => m.LoginModule) },
  { path: 'table-errors', loadChildren: () => import('./routes/table-errors/table-errors.module').then(m => m.TableErrorsModule) },
  { path: '', redirectTo: 'table-errors', pathMatch: 'full' },
  { path: '**', redirectTo: 'table-errors' }
];
