import { Component, Input } from '@angular/core';
import { Airport } from 'src/app/airports/airport.model';
import { AirportsService } from 'src/app/airports/airports.service';

@Component({
  selector: 'app-airport-card',
  templateUrl: './airport-card.component.html',
})
export class AirportCardComponent {
  @Input() airport: Airport | null = null;

constructor(private airportService: AirportsService) {}

  handleDelete() {
    if (this.airport) {
      this.airportService.deleteById(this.airport.id);
    }
  }
}
