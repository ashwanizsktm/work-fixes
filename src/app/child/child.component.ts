import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  theItem = [];
  tempArr = [];
  @Output() childMsg = new EventEmitter();

  @Input() set items(item) {
    // console.log(item);
    // this.tempArr = item;
    this.tempArr.push(item);
    // console.log(this.tempArr)
    this.theItem = this.tempArr;
    // console.log(this.theItem);
    // this.theItem = this.tempArr.filter(data => data != 'item 5');

    // itemsArr.filter(item => item != 'item 3')

    // this.theItem = itemsArr;

    // this.theItem = item;
    // let filteredData = [];
    // this.
    // this.theItem.filter((item) => {
  }

  constructor() {}

  ngOnInit() {
    // console.log(this.items);
  }

  sendingData(value) {
    this.childMsg.emit(value.innerText);
  }
}
