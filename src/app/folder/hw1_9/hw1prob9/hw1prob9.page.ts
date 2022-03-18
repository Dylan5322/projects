import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hw1prob9',
  templateUrl: './hw1prob9.page.html',
  styleUrls: ['./hw1prob9.page.scss'],
})
export class Hw1prob9Page implements OnInit {

  message;

  constructor() { }

  ngOnInit() {

    let miles = Number(prompt('enter miles'))
    let gallons = Number(prompt('enter gallons'))

    this.message = (miles/gallons) +' mpg'

  }

}
