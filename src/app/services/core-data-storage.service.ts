import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreDataStorageService {

  booleanSubject = new Subject<boolean>();

  constructor() { }

  getData() {
    this.booleanSubject.next(true);
    console.log('trigger');
  }

  asObs(): Observable<any> {
    return this.booleanSubject.asObservable();
  }
}
