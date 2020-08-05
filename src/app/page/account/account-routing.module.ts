import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      {
        path: 'authenticate',
        loadChildren: () => import('./authenticate/authenticate.module').then(m => m.AuthenticateModule)
      },
      {
        path: 'signup',
        loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule)
      },
    ]
  },
  {
    path: '**',
    loadChildren: () => import('../shared/not-found/not-found.module').then(m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
