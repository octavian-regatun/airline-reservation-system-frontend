import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FlightRequestDto, FlightResponseDto } from './flight.model';

@Injectable({
  providedIn: 'root',
})
export class FlightsService {
  flights: FlightResponseDto[] = [];

  constructor(private http: HttpClient) {
    this.updateFlights();
  }

  save(flight: FlightRequestDto) {
    this.http
      .post<FlightResponseDto>(environment.apiUrl + '/flights', flight)
      .subscribe(() => this.updateFlights());
  }

  updateFlights() {
    this.http
      .get<FlightResponseDto[]>(environment.apiUrl + '/flights')
      .subscribe((flights) => (this.flights = flights));
  }

  findById(id: number) {
    return this.http.get<FlightResponseDto>(
      environment.apiUrl + `/flights/${id}`
    );
  }

  deleteById(id: number) {
    return this.http
      .delete<void>(environment.apiUrl + `/flights/${id}`)
      .subscribe(() => {
        this.updateFlights();
      });
  }
}
