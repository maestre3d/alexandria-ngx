import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListVerticalCardComponent } from './list-vertical-card.component';
import { VerticalCardModule } from '../vertical-card/vertical-card.module';

@NgModule({
  declarations: [
    ListVerticalCardComponent
  ],
  imports: [
    CommonModule,
    VerticalCardModule
  ],
  exports: [
    ListVerticalCardComponent
  ]
})
export class ListVerticalCardModule { }
