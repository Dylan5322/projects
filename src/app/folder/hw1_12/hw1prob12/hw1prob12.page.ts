import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hw1prob12',
  templateUrl: './hw1prob12.page.html',
  styleUrls: ['./hw1prob12.page.scss'],
})
export class Hw1prob12Page implements OnInit {
  upper
  lower
  length
  start
  constructor() { }

  ngOnInit() {
    let city = prompt('enter your favorite city')
    this.upper = city.toUpperCase()
    this.lower = city.toLowerCase()
    this.length = city.length
    this.start = city.charAt(0)
  }

}
