import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Ads } from '@alexandria/mock/ad.mock';
import { IAd } from '@alexandria/domain/entity/ad.entity';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  constructor() { }

  create(ad: IAd): Observable<void> {
    return new Observable((observer) => {
      Ads.push(ad);
      observer.next();
      observer.complete();
    });
  }

  get(id: string): Observable<IAd> {
    return new Observable((observer) => {
      Ads.forEach(ad => {
        if (ad.id === id) {
          observer.next(ad);
          observer.complete();
          return;
        }
      });

      observer.error(new Error('ad not found'));
      observer.complete();
    });
  }

  list(): Observable<Array<IAd>> {
    return new Observable((observer) => {
      observer.next(Ads);
      observer.complete();
    });
  }
}
