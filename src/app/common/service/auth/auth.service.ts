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

  getUserPool(): CognitoUserPool {
    return this.userPool;
  }

  getCognitoUser(username: string): CognitoUser {
    return new CognitoUser({
      Username: username,
      Storage: this.storage,
      Pool: this.userPool
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
