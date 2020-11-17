import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { CarsService } from './cars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn: boolean = false;

  @ViewChild('myElement', { static: true }) myElement: ElementRef;

  constructor(private carsService: CarsService) {

  }

  ngOnInit(): void {
    console.log(this.carsService.getCars())
  }

  changeParagraphColor(): void {
  }

  logOutUser(): void {
    console.log('logOut event')
    this.isLoggedIn = !this.isLoggedIn;
  }
}
