import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Third party
import { MatIconModule } from '@angular/material/icon';

// Owned
import { VerticalItemComponent } from './vertical-item.component';

@NgModule({
  declarations: [
    VerticalItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule
  ],
  exports: [
    VerticalItemComponent
  ]
})
export class VerticalItemModule { }
