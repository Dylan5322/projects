import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-madlib',
  templateUrl: './madlib.page.html',
  styleUrls: ['./madlib.page.scss'],
})
export class MadlibPage implements OnInit {

  message;

  constructor() { }

  ngOnInit() {

    let container = prompt('enter a container')
    let adjective = prompt('enter an adjective')
    let adjective1 = prompt('enter an adjective')
    let noun = prompt('enter a noun')
    let animal = prompt('enter an animal')
    let vegetable = prompt('enter a vegetable')
    let vegetable1 = prompt('enter a vegetable')
    let color = prompt('enter a color')
    let adjective2 = prompt('enter a adjective')

    this.message = `Make sure yout luch ${container} is filled with nutrious ${adjective} food. Dp not go to the ${adjective1} food stand across the street from school. The hamburgers they serve are fried in ${noun} and are made of ${animal} meat. So take a sandwich made of ${vegetable} or ${vegetable1} it's much healthier! Drink ${color} milk instead of ${adjective2} colas.`
    
  }

}
