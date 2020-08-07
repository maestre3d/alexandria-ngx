import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticateRoutingModule } from './authenticate-routing.module';
import { AuthenticateComponent } from './authenticate.component';
import { SharedModule } from '@alexandria/common/shared.module';
import { MatDividerModule } from '@angular/material/divider';
import { TemporalPasswordDialogComponent } from './dialog/temporal-password/temporal-password-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { VerifyEmailDialogComponent } from './dialog/verify-email/verify-email-dialog.component';
import { ResetPasswordDialogComponent } from './dialog/reset-password/reset-password-dialog.component';

@NgModule({
  declarations: [AuthenticateComponent, TemporalPasswordDialogComponent, VerifyEmailDialogComponent, ResetPasswordDialogComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatDividerModule,
    MatDialogModule,
    AuthenticateRoutingModule
  ],
  entryComponents: []
})
export class AuthenticateModule { }
