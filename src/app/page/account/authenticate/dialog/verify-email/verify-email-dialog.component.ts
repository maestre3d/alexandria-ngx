import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, } from '@angular/forms';

@Component({
  selector: 'app-verify-email-dialog',
  templateUrl: './verify-email-dialog.html'
})
export class VerifyEmailDialogComponent implements OnInit {
  public codeForm = new FormControl('');
  public isPwdHidding = true;

  constructor(public dialogRef: MatDialogRef<VerifyEmailDialogComponent>) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
