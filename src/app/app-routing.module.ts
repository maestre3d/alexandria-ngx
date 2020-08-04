import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: 'accounts',
    loadChildren: () => import('./page/account/account.module').then(m => m.AccountModule)
  },
  {
    path: '',
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
