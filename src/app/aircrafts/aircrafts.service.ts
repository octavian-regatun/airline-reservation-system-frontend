import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Aircraft } from './aircraft.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AircraftsService {
  aircrafts = new Subject<Aircraft[]>();
  showCreate = new Subject<boolean>();

  constructor(private http: HttpClient) {
    this.findAll();
  }

  findAll() {
    return this.http
      .get<Aircraft[]>(environment.apiUrl + '/aircrafts')
      .subscribe((aircrafts) => {
        this.aircrafts.next(aircrafts);
      });
  }

  findById(id: number) {
    return this.http.get<Aircraft>(environment.apiUrl + `/aircrafts/${id}`);
  }

  deleteById(id: number) {
    return this.http
      .delete<void>(environment.apiUrl + `/aircrafts/${id}`)
      .subscribe(() => {
        this.findAll();
      });
  }

  create(aircraft: Aircraft) {
    return this.http
      .post<Aircraft>(environment.apiUrl + `/aircrafts`, aircraft)
      .subscribe(() => {
        this.findAll();
        this.setShowCreate(false);
      });
  }

  setShowCreate(showCreate: boolean) {
    this.showCreate.next(showCreate);
  }
}
