import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '@alexandria/domain/entity/user.entity';
import { Users } from '@alexandria/mock/user.mock';
import { CognitoUserPool, CognitoUser, AuthenticationDetails, CookieStorage, CognitoUserSession } from 'amazon-cognito-identity-js';
import { environment } from 'environments/environment';
import { Config } from '@alexandria/config/alexandria.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private removePolicy = new Date();

  private storage = new CookieStorage({
    domain: Config.Domain,
    expires: this.removePolicy.getMilliseconds(),
    path: '/',
    secure: true
  });
  private userPool = new CognitoUserPool({
    UserPoolId: environment.cognitoPoolID,
    ClientId: environment.cognitoClientID,
    Storage: this.storage
  });

  constructor() {
    this.removePolicy.setDate(new Date().getDate() + 30);
  }

  signIn(username: string, password: string): Observable<CognitoUserSession> {
    return new Observable((observer) => {
      const cognitoUser = new CognitoUser({
        Username: username,
        Pool: this.userPool
      });

      cognitoUser.authenticateUser(new AuthenticationDetails({
        Username: username,
        Password: password
      }), {
        onSuccess: (result, mfaEnabled) => {
          this.storage.setItem('aws-cg-session', result.getAccessToken().getJwtToken());
          observer.next(result);
          observer.complete();
        },
        onFailure: (err) => {
          observer.error(err);
          observer.complete();
        }
      });
    });
  }

  getLogged(): Observable<IUser> {
    return new Observable((observer) => {
      let user: IUser;
      Users.forEach((u) => {
        if (u.id === 'ca0770b6-7650-4a0e-b924-aa0396d953ac') {
          user = u;
          observer.next(user);
          observer.complete();
          return;
        }
      });

      observer.error(new Error('user not found'));
      observer.complete();
    });
  }
}
