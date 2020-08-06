import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { CredentialGuard } from '@alexandria/common/guard/credential.guard';

const routes: Routes = [
  {
    path: 'accounts',
    canActivate: [CredentialGuard],
    loadChildren: () => import('./page/account/account.module').then(m => m.AccountModule)
  },
  {
    path: '',
    canActivate: [CredentialGuard],
    loadChildren: () => import('./page/shell/shell.module').then(m => m.ShellModule)
  },
  {
    path: '**',
    loadChildren: () => import('./page/shared/not-found/not-found.module').then(m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
