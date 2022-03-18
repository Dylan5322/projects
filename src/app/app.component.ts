import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Madlib', url: '/folder/madlib/madlib' , icon: "newspaper"},
    { title: 'Miles Per Gallon', url: '/folder/hw1_9/hw1prob9' , icon: "train"},
    { title: 'Test Average Hw1', url: '/folder/hw1_10/hw1-prob10' , icon: "analytics"},
    { title: 'String Manipulator', url: '/folder/hww_12/hw1prob12' , icon: "analytics"}
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
