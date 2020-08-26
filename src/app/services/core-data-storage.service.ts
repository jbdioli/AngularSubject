import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreDataStorageService {

  booleanSubject = new Subject<boolean>();

  isValue = true;

  constructor() {
  }

  getData() {
    this.booleanSubject.next(this.isValue);
    console.log('trigger', this.booleanSubject);
  }

  asObs(): Observable<any> {
    return this.booleanSubject.asObservable();
  }
}
