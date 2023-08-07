import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Aircraft } from 'src/app/aircrafts/aircraft.model';
import { AircraftsService } from 'src/app/aircrafts/aircrafts.service';

@Component({
  selector: 'app-create-aircraft',
  templateUrl: './create-aircraft.component.html',
  styleUrls: ['./create-aircraft.component.scss'],
})
export class CreateAircraftComponent {
  constructor(private aircraftService: AircraftsService) {}

  form = new FormGroup({
    brand: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    capacity: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
  });

  handleSubmit() {
    this.aircraftService.create(this.form.value as unknown as Aircraft);
  }
}
