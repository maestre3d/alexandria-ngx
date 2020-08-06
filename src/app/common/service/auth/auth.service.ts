import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '@alexandria/domain/entity/user.entity';
import { CognitoUserPool, CognitoUser, CognitoUserSession } from 'amazon-cognito-identity-js';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private removePolicy = new Date();
  private userPool: CognitoUserPool;

  constructor() {
    this.removePolicy.setDate(this.removePolicy.getDate() + 30);

    this.userPool = new CognitoUserPool({
      UserPoolId: environment.cognitoPoolID,
      ClientId: environment.cognitoClientID
    });
  }

  getPool(): Observable<CognitoUserPool> {
    return new Observable(observer => {
      observer.next(this.userPool);
      observer.complete();
    });
  }

  getCurrentUser(): CognitoUser {
    return this.userPool.getCurrentUser();
  }

  generateUser(username: string): CognitoUser {
    return new CognitoUser({
      Username: username,
      Pool: this.userPool
    });
  }

  getLogged(): Observable<IUser> {
    return new Observable((observer) => {
      const cognitoUser = this.getCurrentUser();
      if (cognitoUser !== null) {
        // Required session to get attributes
        cognitoUser.getSession((errSession: Error, session: CognitoUserSession) => {
          if (errSession !== null) {
            observer.error(errSession);
            observer.complete();
            return;
          }

          cognitoUser.getUserData((err, userData) => {
            if (err !== null) {
              observer.error(err);
              observer.complete();
              return;
            }

            // Init Mapping process
            const user: IUser = {
              id: '',
              username: userData.Username,
              email: ''
            };

            userData.UserAttributes.forEach((v, i) => {
              switch (v.Name) {
                case 'email':
                  user.email = v.Value;
                  break;
                case 'sub':
                  user.id = v.Value;
                  break;
                case 'locale':
                  user.locale = v.Value;
                  break;
                case 'picture':
                  user.image = v.Value;
                  break;
                case 'update_at':
                  user.updateTime = new Date(v.Value);
                  break;
                case 'name':
                  user.name = v.Value;
                  break;
                case 'middle_name':
                  user.middleName = v.Value;
                  break;
                case 'given_name':
                  user.lastName = v.Value;
                  break;
              }
            });

            // Set display name (null | name | name + last_name | name + middle_name + last_name)
            user.displayName = user.name && user.name !== '' ? user.lastName && user.lastName !== '' ?
              user.middleName && user.middleName !== '' ? `${user.name} ${user.middleName} ${user.lastName}` :
              `${user.name} ${user.lastName}` : user.name : null;

            observer.next(user);
            observer.complete();
          });
        });
      }

      observer.next(null);
      observer.complete();
    });
  }
}
