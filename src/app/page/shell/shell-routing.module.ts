import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './shell.component';
import { CredentialGuard } from '@alexandria/common/guard/credential.guard';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./feed/feed.module').then(m => m.FeedModule),
      },
      {
        path: 'search',
        loadChildren: () => import('./search/search.module').then(m => m.SearchModule)
      },
      {
        path: 'notification',
        canActivate: [CredentialGuard],
      },
      {
        path: 'me',
        canActivate: [CredentialGuard],
      },
      {
        path: 'collection',
        canActivate: [CredentialGuard],
      },
      {
        path: '**',
        loadChildren: () => import('../shared/not-found/not-found.module').then(m => m.NotFoundModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShellRoutingModule { }
