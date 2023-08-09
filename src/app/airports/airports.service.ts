import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Airport } from './airport.model';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AirportsService {
  airports: Airport[] = [];
  airportsSubject: Subject<Airport[]> = new Subject<Airport[]>();

  constructor(private http: HttpClient) {
    this.airportsSubject.subscribe((airports) => {
      this.airports = airports;
    });
  }

  getAirports() {
    return [...this.airports];
  }

  save(airport: Airport) {
    this.http
      .post<Airport>(environment.apiUrl + '/airports', airport)
      .subscribe(() => this.handleAirportsUpdate());
  }

  handleAirportsUpdate() {
    this.http
      .get<Airport[]>(environment.apiUrl + '/airports')
      .subscribe((airports) => this.airportsSubject.next(airports));
  }

  findById(id: number) {
    return this.http.get<Airport>(environment.apiUrl + `/airports/${id}`);
  }

  deleteById(id: number) {
    return this.http
      .delete<void>(environment.apiUrl + `/airports/${id}`)
      .subscribe(() => {
        this.handleAirportsUpdate();
      });
  }
}
