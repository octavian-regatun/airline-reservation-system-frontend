import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Aircraft } from 'src/app/aircrafts/aircraft.model';
import { AircraftsService } from 'src/app/aircrafts/aircrafts.service';

@Component({
  selector: 'app-create-flight',
  templateUrl: './create-flight.component.html',
  styleUrls: ['./create-flight.component.scss'],
})
export class CreateFlightComponent implements OnInit {
  aircrafts: Aircraft[] = [];

  form = new FormGroup({
    aircraft: new FormGroup('', Validators.required),
  });

  constructor(private aircraftService: AircraftsService) {}

  ngOnInit(): void {
    this.aircrafts = this.aircraftService.getAircrafts();
    this.aircraftService.aircraftsSubject.subscribe((aircrafts) => {
      this.aircrafts = aircrafts;
    });
  }
}
