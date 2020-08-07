import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { CognitoUser } from 'amazon-cognito-identity-js';

@Component({
  selector: 'app-verify-email-dialog',
  templateUrl: './verify-email-dialog.html'
})
export class VerifyEmailDialogComponent implements OnInit, AfterViewInit {
  public formGroup = new FormGroup({
    code: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ])
  });
  public isCodeHidding = true;
  public isHandling = false;
  public errorMsg = null;

  constructor(public dialogRef: MatDialogRef<VerifyEmailDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public cognitoUser: CognitoUser) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.requestEmailVerify();
  }

  requestEmailVerify(): void {
    this.cognitoUser.getAttributeVerificationCode('email', {
      onSuccess: () => {},
      onFailure: err => {
        this.errorMsg = err.message;
      },
      inputVerificationCode: data => {
      }
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onConfirm(): void {
    this.isHandling = true;
    this.cognitoUser.verifyAttribute('email', this.formGroup.get('code').value, {
      onSuccess: s => {
        this.isHandling = false;
        this.dialogRef.close();
      },
      onFailure: err => {
        this.isHandling = false;
        this.errorMsg = err.message;
      }
    });
  }

}
