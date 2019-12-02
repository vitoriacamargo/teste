import { HomeComponent } from './home/home.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';


import { NotFoundComponent } from './shared/not-found.component';
import { SigninComponent } from './signin/signin.component';
import { AuthGuard } from './auth/auth.guard';

const appRoutes: Routes = [
  { path: 'contacts',
    loadChildren: 'app/contacts/contacts.module#ContactsModule',
    canActivate: [AuthGuard]
  },
  { path: 'contacts2',
    loadChildren: 'app/contacts2/contacts2.module#Contacts2Module',
    canActivate: [AuthGuard]
  },
  { path: '', pathMatch: 'full', component: HomeComponent,
    canActivate: [AuthGuard] },
  { path: 'signin', component: SigninComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
