import { Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login';
import { RegisterComponent } from './auth/register/register';
import { ChuletonesListComponent } from './chuletones/list/list';
import { ChuletonesFormComponent } from './chuletones/form/form';

export const routes: Routes = [
   { path: '', redirectTo: 'login', pathMatch: 'full' },

   { path: 'login', component: LoginComponent },
   { path: 'register', component: RegisterComponent },

   { path: 'chuletones', component: ChuletonesListComponent },
   { path: 'form', component: ChuletonesFormComponent },
   { path: 'dashboard', redirectTo: 'chuletones', pathMatch: 'full' },

   { path: '**', redirectTo: 'login' }
];