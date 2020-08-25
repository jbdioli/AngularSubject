import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CoreDataStorageService } from 'src/app/services/core-data-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  obsSubscription: Subscription;

  constructor(
    private storage: CoreDataStorageService
  ) {
    // this.obsSubscription = this.storage.asObs().subscribe(observer => {
    //   if (observer) {
    //     console.log('obs : ', observer);
    //   }
    // });

    this.storage.getData();
    this.obsSubscription = this.storage.booleanSubject.subscribe((value: boolean) => {
      console.log('the response is : ', value);
    }, (error: any) => {
      console.log('Error : ', error);
    });

  }

  ngOnInit() {


  }

}
