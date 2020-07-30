import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trendings } from '@alexandria/mock/trending.mock';
import { ITrending } from '@alexandria/domain/entity/trending.entity';

@Injectable({
  providedIn: 'root'
})
export class TrendingService {

  constructor() { }

  list(): Observable<Array<ITrending>> {
    return new Observable((observer) => {
      observer.next(Trendings);
      observer.complete();
    });
  }
}
