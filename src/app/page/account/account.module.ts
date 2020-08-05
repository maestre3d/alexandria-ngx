import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { SharedModule } from '@alexandria/common/shared.module';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [AccountComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatDividerModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
