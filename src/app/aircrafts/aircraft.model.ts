export type AircraftBrand = 'Boeing' | 'Airbus';

export class Aircraft {
  constructor(
    public id: number,
    public brand: AircraftBrand,
    public name: string,
    public capacity: number,
    public image: string
  ) {}
}
