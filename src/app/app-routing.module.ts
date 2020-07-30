import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterPreloader, PreloadingStrategy, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./page/shell/shell.module').then(m => m.ShellModule)
  },
  {
    path: 'authenticate',
    loadChildren: () => import('./page/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    pathMatch: 'full',
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
