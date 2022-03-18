import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hw1-prob10',
  templateUrl: './hw1-prob10.page.html',
  styleUrls: ['./hw1-prob10.page.scss'],
})
export class Hw1Prob10Page implements OnInit {

  message;

  constructor() { }

  ngOnInit() {

    let test1 = Number(prompt('enter test score'))
    let test2 = Number(prompt('enter test score'))
    let test3 = Number(prompt('enter test score'))

    this.message = (test1+test2+test3)/3

  }

}
