import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Config } from '@alexandria/config/alexandria.config';
import { AuthService } from '@alexandria/service/auth/auth.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.scss']
})
export class AuthenticateComponent implements OnInit, OnDestroy {
  // rxJS
  private subject$: Subject<void> = new Subject();
  // UI
  public isHandling = false;
  public isCredIncorrect = false;
  public isPwdHidding = false;
  // Sign In Form
  public isSignIn = true;
  public signInFormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  constructor(private title: Title, private auth: AuthService) {}

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
      this.auth.signIn(this.signInFormGroup.get('username').value, this.signInFormGroup.get('password').value)
        .pipe(takeUntil(this.subject$)).subscribe(session => {
          console.log(session.getAccessToken().payload);
        }, err => {
          this.isHandling = false;
          this.isCredIncorrect = err.code === 'NotAuthorizedException' ? true : false;
        }, () => {
          this.isHandling = false;
        });
    }
  }
}
