import { Aircraft } from '../aircrafts/aircraft.model';
import { Airport } from '../airports/airport.model';

export type FlightRequestDto = {
  aircraftId: number;
  departureAirportId: number;
  arrivalAirportId: number;
  departureTime: Date;
  arrivalTime: Date;
  price: number;
};

export type FlightResponseDto = {
  id: number;
  aircraft: Aircraft;
  departureAirport: Airport;
  arrivalAirport: Airport;
  departureTime: Date;
  arrivalTime: Date;
  price: number;
  totalSeats: number;
  availableSeats: number;
};
