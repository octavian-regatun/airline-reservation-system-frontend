import { Component, Input } from '@angular/core';
import { Aircraft } from 'src/app/aircrafts/aircraft.model';
import { AircraftsService } from 'src/app/aircrafts/aircrafts.service';

@Component({
  selector: 'app-aircraft-card',
  templateUrl: './aircraft-card.component.html',
})
export class AircraftCardComponent {
  @Input() aircraft: Aircraft | null = null;

  constructor(private aircraftService: AircraftsService) {}

  handleDelete() {
    if (!this.aircraft) return;

    this.aircraftService.deleteById(this.aircraft.id);
  }
}
