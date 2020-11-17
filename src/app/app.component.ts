import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

import { Car } from './interfaces/cars.interface';

import { CarsService } from './cars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn: boolean = false;

  @ViewChild('myElement', { static: true }) myElement: ElementRef;

  public cars: Car[] = [];

  constructor(private carsService: CarsService) {

  }

  ngOnInit(): void {
    this.cars = this.carsService.getCars();
    console.log(this.cars)
  }

  removeCar(index: number): void {
    this.carsService.removeCar(index);
  }

  logOutUser(): void {
    console.log('logOut event')
    this.isLoggedIn = !this.isLoggedIn;
  }
}
