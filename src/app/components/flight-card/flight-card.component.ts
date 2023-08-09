import { Component, Input } from '@angular/core';
import {
  FlightResponseDto
} from 'src/app/flights/flight.model';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
})
export class FlightCardComponent {
  @Input() flight?: FlightResponseDto;
}
