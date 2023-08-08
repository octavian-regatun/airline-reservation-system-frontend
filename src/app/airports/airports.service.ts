import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Airport } from './airport.model';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AirportsService {
  airports: Subject<Airport[]> = new Subject<Airport[]>();
  constructor(private http: HttpClient) {}

  create(airport: Airport) {
    this.http
      .post<Airport>(environment.apiUrl + '/airports', airport)
      .subscribe(() => this.findAll());
  }
  findAll() {
    this.http
      .get<Airport[]>(environment.apiUrl + '/airports')
      .subscribe((airports) => this.airports.next(airports));
  }

  findById(id: number) {
    return this.http.get<Airport>(environment.apiUrl + `/airports/${id}`);
  }

  deleteById(id: number) {
    return this.http
      .delete<void>(environment.apiUrl + `/airports/${id}`)
      .subscribe(() => {
        this.findAll();
      });
  }
}
