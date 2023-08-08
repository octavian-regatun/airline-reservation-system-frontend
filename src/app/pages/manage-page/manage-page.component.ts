import { Component, OnInit } from '@angular/core';
import { AircraftsService } from 'src/app/aircrafts/aircrafts.service';
import { AirportsService } from 'src/app/airports/airports.service';

@Component({
  selector: 'app-manage-page',
  templateUrl: './manage-page.component.html',
  styleUrls: ['./manage-page.component.scss'],
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
    this.aircraftService.findAll();
    this.airportService.findAll();
  }
}
