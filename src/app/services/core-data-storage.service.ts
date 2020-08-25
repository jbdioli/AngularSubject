import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreDataStorageService {

  booleanSubject = new Subject<boolean>();

  constructor() { }

  getData() {
    this.booleanSubject.next(true);
  }
}
