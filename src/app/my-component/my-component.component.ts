import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Car } from '../interfaces/cars.interface';

import { CarsService } from '../cars.service';

@Component({
  selector: 'my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  @Input() userIsLoggedIn: boolean;

  @Output() logOut = new EventEmitter<void>();

  public year: number = 2020;

  public cars: Car[] = [];
  

  constructor(private carsService: CarsService) {
    console.log('my-component constructor')
  }

  ngOnInit(): void {
    this.cars = this.carsService.getCars();
  }

  logOutEvent(): void {
    this.logOut.emit()
  }

  removeCar(index: number): void {
    this.carsService.removeCar(index);
  }
}
