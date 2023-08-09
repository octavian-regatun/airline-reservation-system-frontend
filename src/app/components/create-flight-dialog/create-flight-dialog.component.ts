import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Aircraft } from 'src/app/aircrafts/aircraft.model';
import { AircraftsService } from 'src/app/aircrafts/aircrafts.service';
import { Airport } from 'src/app/airports/airport.model';
import { AirportsService } from 'src/app/airports/airports.service';
import { FlightsService } from 'src/app/flights/flights.service';

@Component({
  selector: 'app-create-flight-modal',
  templateUrl: './create-flight-dialog.component.html',
})
export class CreateFlightDialogComponent implements OnInit {
  pickedAircraft?: Aircraft;

  form = new FormGroup({
    aircraftId: new FormControl('', Validators.required),
    departureAirportId: new FormControl('', Validators.required),
    arrivalAirportId: new FormControl('', Validators.required),
    departureTime: new FormControl('', Validators.required),
    arrivalTime: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
  });

  constructor(
    public aircraftService: AircraftsService,
    public airportService: AirportsService,
    public flightService: FlightsService,
    public dialogRef: MatDialogRef<CreateFlightDialogComponent>
  ) {}

  ngOnInit(): void {
    this.form.get('aircraftId')?.valueChanges.subscribe((value) => {
      if (value === null) return;

      this.aircraftService
        .findById(parseInt(value))
        .subscribe((aircraft: Aircraft) => {
          this.pickedAircraft = aircraft;
        });
    });
  }

  handleSubmit() {
    this.flightService.save(this.form.value as any);
  }
}
