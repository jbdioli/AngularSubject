import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CoreDataStorageService } from 'src/app/services/core-data-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  obsSubject: Subscription;

  constructor(
    private storage: CoreDataStorageService
  ) { }

  ngOnInit() {
    this.storage.getData();
    this.obsSubject = this.storage.booleanSubject.subscribe((response: boolean) => {
      console.log('the response is : ', response);
    });
  }

}
