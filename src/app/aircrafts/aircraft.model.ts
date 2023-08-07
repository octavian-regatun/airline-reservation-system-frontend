export type AircraftBrand = 'Boeing' | 'Airbus';

export class Aircraft {
  id: number;
  brand: AircraftBrand;
  name: string;
  capacity: number;
  image: string;

  constructor(
    id: number,
    brand: AircraftBrand,
    name: string,
    capacity: number,
    image: string
  ) {
    this.id = id;
    this.brand = brand;
    this.name = name;
    this.capacity = capacity;
    this.image = image;
  }
}
