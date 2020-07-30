import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListHorizontalItemComponent } from './list-horizontal-item.component';
import { HorizontalItemModule } from '@alexandria/component/horizontal-item/horizontal-item.module';

@NgModule({
  declarations: [
    ListHorizontalItemComponent
  ],
  imports: [
    CommonModule,
    HorizontalItemModule
  ],
  exports: [
    ListHorizontalItemComponent
  ]
})
export class ListHorizontalItemModule { }
