import { Injectable } from '@angular/core';

interface Car {
  make: string;
  model: string;
  year: number;
}

const cars: Car[] = [
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

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor() { }

  getCars(): Car[] {
    return cars;
  }

  removeCar(index: number): void {
    cars.splice(index, 1);
  }
}
