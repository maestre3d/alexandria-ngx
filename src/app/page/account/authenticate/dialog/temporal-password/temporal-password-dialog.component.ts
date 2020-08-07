import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { ICognitoRef } from '../../interface/cognito-ref.interface';

@Component({
  selector: 'app-temporal-password-dialog',
  templateUrl: './temporal-password-dialog.html'
})
export class TemporalPasswordDialogComponent implements OnInit {
  public passwordForm = new FormControl('', [
    Validators.required, Validators.minLength(8),
    Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})')
  ]);
  public isPwdHidding = true;

  constructor(public dialogRef: MatDialogRef<TemporalPasswordDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: ICognitoRef) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
