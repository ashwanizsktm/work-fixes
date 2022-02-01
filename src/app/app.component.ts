import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular';
  message: string;
  itemLength: boolean;
  allData = [];

  interestPayment = 434345.9 + 343434;

  ngOnInit() {
    this.gettingData();
  }
  receiveData(event) {
    this.message = event;
  }

  gettingData() {
    const theData = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5'];
    this.allData = theData;

    // console.log((this.allData.length = 4));
    // this.itemLength = this.allData.length ? false : true;
    // if (this.itemLength) alert('there is no data available!');
  }
}
