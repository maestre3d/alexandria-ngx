import { Injectable } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  store(key: string, value: string): Observable<void> {
    return new Observable(observer => {
      localStorage.setItem(key, value);
      observer.next();
      observer.complete();
    });
  }

  storeBulk(data: Map<string, string>): Observable<void> {
    return new Observable(observer => {
      data.forEach((v, k) => {
        localStorage.setItem(k, v);
      });
      observer.next();
      observer.complete();
    });
  }

  get(key: string): Observable<string> {
    return new Observable(observer => {
      observer.next(localStorage.getItem(key));
      observer.complete();
    });
  }

  remove(key: string): Observable<void> {
    return new Observable(observer => {
      localStorage.removeItem(key);
      observer.next();
      observer.complete();
    });
  }

  removeBulk(keys: Array<string>): Observable<void> {
    return new Observable(observer => {
      keys.forEach(k => {
        localStorage.removeItem(k);
      });
      observer.next();
      observer.complete();
    });
  }

  clear(): Observable<void> {
    return new Observable(observer => {
      localStorage.clear();
      observer.next();
      observer.complete();
    });
  }
}
