import { Component, OnInit } from '@angular/core';

import { Car } from '../interfaces/cars.interface';

import { CarsService } from '../cars.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  public cars: Car[] = [];

  constructor(private carsService: CarsService) { }

  ngOnInit(): void {
    console.log('example component rendered?')
    this.cars = this.carsService.getCars();
  }

  removeCar(index: number): void {
    this.carsService.removeCar(index);
  }
}
