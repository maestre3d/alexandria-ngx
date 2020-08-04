import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticateRoutingModule } from './authenticate-routing.module';
import { AuthenticateComponent } from './authenticate.component';
import { SharedModule } from '@alexandria/common/shared.module';


@NgModule({
  declarations: [AuthenticateComponent],
  imports: [
    CommonModule,
    SharedModule,
    AuthenticateRoutingModule
  ]
})
export class AuthenticateModule { }
