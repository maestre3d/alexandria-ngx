import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListVerticalItemComponent } from './list-vertical-item.component';
import { VerticalItemModule } from '../vertical-item/vertical-item.module';

@NgModule({
  declarations: [
    ListVerticalItemComponent
  ],
  imports: [
    CommonModule,
    VerticalItemModule
  ],
  exports: [
    ListVerticalItemComponent
  ]
})
export class ListVerticalItemModule { }
