import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundRoutingModule } from './not-found-routing.module';
import { NotFoundComponent } from './not-found.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule,
    MatIconModule,
    NotFoundRoutingModule
  ]
})
export class NotFoundModule { }
