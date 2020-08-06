import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Histories } from '@alexandria/mock/history.mock';
import { IHistory } from '@alexandria/domain/entity/history.entity';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor() { }

  create(history: IHistory): Observable<void> {
    return new Observable((observer) => {
      Histories.push(history);
      observer.next();
      observer.complete();
    });
  }

  get(id: string): Observable<IHistory> {
    return new Observable((observer) => {
      Histories.forEach((history) => {
        if (history.userID === id) {
          observer.next(history);
          observer.complete();
          return;
        }
      });

      observer.next(null);
      observer.complete();
    });
  }

  list(nextToken?: string, limit?: number): Observable<Array<IHistory>> {
    nextToken = nextToken ? nextToken : '';
    limit = limit || limit >= 1 ? limit : 10;

    return new Observable((observer) => {
      observer.next(Histories);
      observer.complete();
    });
  }
}
