import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userIsLoggedIn: boolean = false;

  @ViewChild('myElement', { static: true }) myElement: ElementRef;
  
  // buttonDisabled: boolean = true;
  // title = `bvtca-ng-demo-two ${this.buttonDisabled}`;

  // dogs = [
  //   {
  //     name: 'Bandit',
  //     breed: 'Border Collie'
  //   },
  //   {
  //     name: 'Tascha',
  //     breed: 'German Shepherd'
  //   },
  //   {
  //     name: 'Echo',
  //     breed: 'Australian Shepherd'
  //   }
  // ]

  // changeButtonState(): void {
  //   this.buttonDisabled = !this.buttonDisabled;
  // }

  // deleteElement(index: number): void {
  //   this.dogs.splice(index, 1);
  // }

  ngOnInit(): void {
    console.log(this.myElement);
  }

  logIn(): void {
    this.userIsLoggedIn = !this.userIsLoggedIn;
  }

  logOutUser(): void {
    console.log('logOut event')
    this.userIsLoggedIn = !this.userIsLoggedIn;
  }
}
