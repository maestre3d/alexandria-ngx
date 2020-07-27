import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Notifications } from '@alexandria/mock/notification.mock';
import { INotification } from '@alexandria/domain/entity/notification.entity';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor() { }

  get(id: string): Observable<INotification> {
    return new Observable((observer) => {
      Notifications.forEach((notification) => {
        if (notification.id === id) {
          observer.next(notification);
          observer.complete();
          return;
        }
      });

      observer.error(new Error('notification not found'));
      observer.complete();
    });
  }

  list(): Observable<Array<INotification>> {
    return new Observable(observer => {
      observer.next(Notifications);
      observer.complete();
    });
  }

  count(): Observable<number> {
    return new Observable(observer => {
      observer.next(Notifications.length);
      observer.complete();
    });
  }
}
