import { Component, OnInit } from '@angular/core';
import { Airport } from 'src/app/airports/airport.model';
import { AirportsService } from 'src/app/airports/airports.service';

@Component({
  selector: 'app-manage-airport',
  templateUrl: './manage-airport.component.html',
  styleUrls: ['./manage-airport.component.scss'],
})
export class ManageAirportComponent implements OnInit {
  showCreate = false;
  airports: Airport[] = [];

  constructor(private airportService: AirportsService) {}

  toggleShowCreate() {
    this.showCreate = !this.showCreate;
  }

  ngOnInit(): void {
    this.airportService.airports.subscribe((airports) => {
      this.airports = airports;
      console.log(airports);
    });
  }
}
