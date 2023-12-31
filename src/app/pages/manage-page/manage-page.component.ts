import { Component, OnInit } from '@angular/core';
import { AircraftsService } from 'src/app/aircrafts/aircrafts.service';
import { AirportsService } from 'src/app/airports/airports.service';

@Component({
  selector: 'app-manage-page',
  templateUrl: './manage-page.component.html',
})
export class ManagePageComponent implements OnInit {
  showCreateFlight = false;

  constructor(
    private aircraftService: AircraftsService,
    private airportService: AirportsService
  ) {}

  toggleCreateFlight() {
    this.showCreateFlight = !this.showCreateFlight;
  }

  ngOnInit(): void {
    this.aircraftService.updateAircrafts();
    this.airportService.handleAirportsUpdate();
  }
}
