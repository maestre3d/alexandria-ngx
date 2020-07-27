import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../common/shared.module';
import { ShellRoutingModule } from './shell-routing.module';
import { ShellComponent } from './shell.component';

import { MatBadgeModule } from '@angular/material/badge';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [ShellComponent],
  imports: [
    CommonModule,
    ShellRoutingModule,
    SharedModule,
    MatBadgeModule,
    MatDividerModule
  ]
})
export class ShellModule { }
