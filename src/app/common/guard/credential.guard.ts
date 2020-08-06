import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth/auth.service';
import { CognitoUserSession } from 'amazon-cognito-identity-js';

@Injectable({
  providedIn: 'root'
})
export class CredentialGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    const accountsURL = '/accounts';
    const authURL = accountsURL + '/authenticate';

    return new Observable((observer) => {
      // Retrieve user from localStorage managed by AWS Cognito SDK
      const cognitoUser = this.auth.getCurrentUser();
      if (cognitoUser !== null) {
        // Init required Session
        cognitoUser.getSession((err: any, session: CognitoUserSession) => {
          let gotError = false;
          if (err !== null) {
            gotError = true;
          } else if (!session.isValid()) {
            gotError = true;
          } else if (session.getAccessToken().getExpiration() < Math.round(new Date().getTime() / 1000)) {
            // If access_token expired, refresh with refres_token
            if (this.auth.refreshSession(session.getRefreshToken().getToken()) === null) {
              gotError = true;
            }
          }
          if (gotError) {
            // Something bad happened, proceed to login
            observer.next(this.router.createUrlTree([authURL], {
              queryParams: {
                redirectURL: state.url
              },
              queryParamsHandling: 'merge'
            }));
            observer.complete();
            return;
          }

          // Session is correct
          if (state.url.includes(accountsURL)) {
            // If user is authenticated but is on /accounts, then redirect to home
            observer.next(this.router.createUrlTree(['/'], {
              queryParamsHandling: 'merge'
            }));
            observer.complete();
            return;
          }

          observer.next(true);
          observer.complete();
        });
      } else {
        // Cognito user not found, proceed to login
        // Using else because getCurrentUser is async
        if (state.url.includes(accountsURL)) {
          observer.next(true);
        } else {
          // Not in /accounts
          observer.next(this.router.createUrlTree([authURL], {
            queryParams: {
              redirectURL: state.url
            },
            queryParamsHandling: 'merge'
          }));
        }
        observer.complete();
      }
    });
  }
}
