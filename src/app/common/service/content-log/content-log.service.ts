import { Injectable } from '@angular/core';
import { Log, Logs } from '../../mock/log.mock';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentLogService {

  constructor() { }

  create(log: Log): Observable<void> {
    return new Observable((observer) => {
      Logs.push(log);
      observer.next();
      observer.complete();
    });
  }

  get(id: string): Observable<Log> {
    return new Observable((observer) => {
      Logs.forEach((log) => {
        if (log.id === id) {
          observer.next(log);
          observer.complete();
          return;
        }
      });

      observer.error(new Error('log not found'));
      observer.complete();
    });
  }

  list(nextToken?: string, limit?: number): Observable<Array<Log>> {
    nextToken = nextToken ? nextToken : '';
    limit = limit || limit >= 1 ? limit : 10;

    return new Observable((observer) => {
      observer.next(Logs);
      observer.complete();
    });
  }
}
