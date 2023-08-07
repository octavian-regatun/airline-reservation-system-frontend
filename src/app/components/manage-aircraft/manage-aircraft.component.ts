import { Component, OnInit } from '@angular/core';
import { Aircraft } from 'src/app/aircrafts/aircraft.model';
import { AircraftsService } from 'src/app/aircrafts/aircrafts.service';

@Component({
  selector: 'app-manage-aircraft',
  templateUrl: './manage-aircraft.component.html',
  styleUrls: ['./manage-aircraft.component.scss'],
})
export class ManageAircraftComponent implements OnInit {
  showCreate = false;
  aircrafts: Aircraft[] = [];

  constructor(private aircraftService: AircraftsService) {}

  toggleShowCreate() {
    this.showCreate = !this.showCreate;
  }

  ngOnInit(): void {
    this.aircraftService.aircrafts.subscribe((aircrafts) => {
      this.aircrafts = aircrafts;
    });

    this.aircraftService.showCreate.subscribe((showCreate) => {
      this.showCreate = showCreate;
    });
  }
}
