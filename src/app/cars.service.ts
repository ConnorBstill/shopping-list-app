import { Injectable } from '@angular/core';

import { Car } from './interfaces/cars.interface';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  cars: Car[] = [
    {
      make: 'Honda',
      model: 'Civic',
      year: 2001
    },
    {
      make: 'Toyota',
      model: 'Highlander',
      year: 2010
    },
    {
      make: 'Ford',
      model: 'pinto',
      year: 1981
    },
    {
      make: 'Subaru',
      model: 'Outback',
      year: 2017
    }
  ]

  constructor() { }

  getCars(): Car[] {
    return this.cars;
  }

  removeCar(index: number): void {
    this.cars.splice(index, 1);
  }
}
