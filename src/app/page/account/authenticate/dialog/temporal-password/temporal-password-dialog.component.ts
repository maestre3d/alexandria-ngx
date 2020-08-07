import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { CognitoUser } from 'amazon-cognito-identity-js';

interface ITemporalPassword {
  cognitoUser: CognitoUser;
  reqAttributes: any;
}

@Component({
  selector: 'app-temporal-password-dialog',
  templateUrl: './temporal-password-dialog.html'
})
export class TemporalPasswordDialogComponent implements OnInit {
  public formGroup = new FormGroup({
    password: new FormControl('', [
      Validators.required, Validators.minLength(8),
      Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')
    ]),
    confirm: new FormControl('', [
      Validators.required, Validators.minLength(8),
      Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')
    ])
  });
  public isPwdHidding = true;
  public isConfirmHidding = true;
  public isHandling = false;
  public errorMsg = null;

  constructor(public dialogRef: MatDialogRef<TemporalPasswordDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: ITemporalPassword) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onChangePassword(): void {
    this.isHandling = true;
    this.data.cognitoUser.completeNewPasswordChallenge(this.formGroup.get('password').value, this.data.reqAttributes, {
      onSuccess: s => {
        this.isHandling = false;
        this.errorMsg = null;
        this.dialogRef.close('ok');
      },
      onFailure: err => {
        this.isHandling = false;
        this.errorMsg = err.message;
      }
    });
  }
}
