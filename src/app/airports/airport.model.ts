export type Location = {
  latitude: number;
  longitude: number;
};

export type AirportType =
  | 'Small Airport'
  | 'Medium Airport'
  | 'Large Airport'
  | 'Heliport';

export class Airport {
  constructor(
    public id: number,
    public name: string,
    public location: Location,
    public country: string,
    public municipality: string,
    public gpsCode: string,
    public iataCode: string,
    public type: AirportType,
    public image: string
  ) {}
}
