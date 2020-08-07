import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CognitoUser } from 'amazon-cognito-identity-js';

@Component({
  selector: 'app-reset-password-dialog',
  styles: ['::ng-deep .mat-form-field-subscript-wrapper { position: inherit !important; }'],
  templateUrl: './reset-password-dialog.html'
})
export class ResetPasswordDialogComponent implements OnInit, AfterViewInit {
  public formGroup = new FormGroup({
    code: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    password: new FormControl('', [
      Validators.required, Validators.minLength(8),
      Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')
    ]),
    confirm: new FormControl('', [
      Validators.required, Validators.minLength(8),
      Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')
    ])
  });
  public isCodeHidding = true;
  public isPwdHidding = true;
  public isConfirmHidding = true;
  public errorMsg = null;

  constructor(public dialogRef: MatDialogRef<ResetPasswordDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public cognitoUser: CognitoUser) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // Init reset password request
    this.requestPasswordReset();
  }

  onConfirm(): void {
    this.cognitoUser.confirmPassword(this.formGroup.get('code').value, this.formGroup.get('password').value, {
      onSuccess: () => {
        this.dialogRef.close();
      },
      onFailure: err => {
        this.errorMsg = err.message;
      }
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  requestPasswordReset(): void {
    this.cognitoUser.forgotPassword({
      inputVerificationCode: code => {
      },
      onSuccess: data => {
      },
      onFailure: err => {
        this.errorMsg = err.message;
      }
    });
  }

}
