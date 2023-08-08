import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Aircraft } from 'src/app/aircrafts/aircraft.model';
import { AircraftsService } from 'src/app/aircrafts/aircrafts.service';

@Component({
  selector: 'app-create-flight-modal',
  templateUrl: './create-flight-dialog.component.html',
})
export class CreateFlightDialogComponent implements OnInit {
  aircrafts: Aircraft[] = [];

  form = new FormGroup({
    aircraft: new FormGroup('', Validators.required),
  });

  constructor(
    private aircraftService: AircraftsService,
    public dialogRef: MatDialogRef<CreateFlightDialogComponent>
  ) {}

  ngOnInit(): void {
    this.aircrafts = this.aircraftService.getAircrafts();
    this.aircraftService.aircraftsSubject.subscribe((aircrafts) => {
      this.aircrafts = aircrafts;
    });
  }
}
