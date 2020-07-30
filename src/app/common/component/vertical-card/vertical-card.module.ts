import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Owned
import { VerticalCardComponent } from './vertical-card.component';

@NgModule({
  declarations: [
    VerticalCardComponent,
  ],
  imports: [
    RouterModule
  ],
  exports: [
    VerticalCardComponent,
  ]
})
export class VerticalCardModule { }
