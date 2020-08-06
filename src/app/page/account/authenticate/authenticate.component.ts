import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Config } from '@alexandria/config/alexandria.config';
import { AuthService } from '@alexandria/service/auth/auth.service';
import { Subject } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import { MatDialog } from '@angular/material/dialog';
import { TemporalPasswordDialogComponent } from './dialog/temporal-password/temporal-password-dialog.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.scss']
})
export class AuthenticateComponent implements OnInit, OnDestroy {
  // rxJS
  private subject$: Subject<void> = new Subject();
  // Data
  private cognitoUser: CognitoUser;
  // UI
  public isHandling = false;
  public errMessage = null;
  public isPwdHidding = true;
  // Sign In Form
  public isSignIn = true;
  public signInFormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  constructor(private title: Title, public dialog: MatDialog, private auth: AuthService) {}

  ngOnInit(): void {
    this.title.setTitle(`Sign In • ${Config.Name}`);
  }

  ngOnDestroy(): void {
    this.subject$.next();
    this.subject$.complete();
  }

  onSignIn(): void {
    if (!this.isHandling) {
      this.isHandling = true;
      const username = this.signInFormGroup.get('username').value;
      const password = this.signInFormGroup.get('password').value;

      this.cognitoUser = this.auth.generateUser(username);
      this.cognitoUser.setAuthenticationFlowType('USER_PASSWORD_AUTH');
      this.cognitoUser.authenticateUser(new AuthenticationDetails({
        Username: username,
        Password: password
      }), {
        onSuccess: (session, isMFA) => {
          this.isHandling = false;
          this.errMessage = null;
        },
        newPasswordRequired: (userAttr, reqAttr) => {
          this.onForceChangePassword(reqAttr);
        },
        mfaRequired: (name, params) => {
          this.isHandling = false;
          this.errMessage = null;
        },
        onFailure: (err) => {
          this.errMessage = err.message;
          this.isHandling = false;
        }
      });
    }
  }

  onForceChangePassword(reqAttr: any): void {
    // User created using AWS Cognito AdminAPI
    // Needs to change password, open a dialog to get an external input
    const dialogRef = this.dialog.open(TemporalPasswordDialogComponent, {
      ariaLabel: 'Change temporary password',
      data: { password: '' }
    });

    dialogRef.afterClosed().pipe(takeUntil(this.subject$)).subscribe((newPassword: string) => {
      if (newPassword !== '') {
        this.cognitoUser.completeNewPasswordChallenge(newPassword, reqAttr, {
          onSuccess: s => {
            this.isHandling = false;
            this.errMessage = null;
          },
          onFailure: err => {
            this.errMessage = err.message;
            this.isHandling = false;
          }
        });
      }
    });
  }
}
