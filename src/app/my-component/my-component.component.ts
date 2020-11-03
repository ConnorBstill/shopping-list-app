import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  @Input() userIsLoggedIn: boolean;

  @Output() logOut = new EventEmitter<void>();

  constructor() {
    console.log('my-component constructor')
   }

  ngOnInit(): void {
    console.log('my-component ngOnInit')
  }

  logOutEvent(): void {
    this.logOut.emit()
  }

}
