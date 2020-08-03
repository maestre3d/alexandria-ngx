import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '@alexandria/domain/entity/user.entity';
import { Users } from '@alexandria/mock/user.mock';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

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
