import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Notification, Notifications } from '../../mock/notification.mock';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor() { }

  get(id: string): Observable<Notification> {
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

  list(): Observable<Array<Notification>> {
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
