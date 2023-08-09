import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Airport } from 'src/app/airports/airport.model';
import { AirportsService } from 'src/app/airports/airports.service';

@Component({
  selector: 'app-create-airport',
  templateUrl: './create-airport.component.html',
})
export class CreateAirportComponent {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    location: new FormGroup({
      latitude: new FormControl('', Validators.required),
      longitude: new FormControl('', Validators.required),
    }),
    country: new FormControl('', Validators.required),
    municipality: new FormControl('', Validators.required),
    gpsCode: new FormControl('', Validators.required),
    iataCode: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
  });

  constructor(private airportService: AirportsService) {}

  handleSubmit() {
    this.airportService.save(this.form.value as unknown as Airport);
  }
}
