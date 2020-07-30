import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

import { VerticalCardComponent } from '@alexandria/common/component/vertical-card/vertical-card.component';
import { ListVerticalCardComponent } from '@alexandria/common/component/list-vertical-card/list-vertical-card.component';


@NgModule({
  declarations: [
    VerticalCardComponent,
    ListVerticalCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,

    VerticalCardComponent,
    ListVerticalCardComponent
  ]
})
export class SharedModule { }
