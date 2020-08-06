import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IPasswordChangeData } from '../../interface/password-change.interface';
import { FormControl, Validators } from '@angular/forms';

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
              @Inject(MAT_DIALOG_DATA) public data: IPasswordChangeData) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}