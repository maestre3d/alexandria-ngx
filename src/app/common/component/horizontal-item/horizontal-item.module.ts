import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HorizontalItemComponent } from './horizontal-item.component';

@NgModule({
  declarations: [
    HorizontalItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HorizontalItemComponent
  ]
})
export class HorizontalItemModule { }
