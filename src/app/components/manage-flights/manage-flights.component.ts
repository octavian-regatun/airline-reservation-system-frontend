import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateFlightDialogComponent } from '../create-flight-dialog/create-flight-dialog.component';
import { FlightsService } from 'src/app/flights/flights.service';

@Component({
  selector: 'app-manage-flights',
  templateUrl: './manage-flights.component.html',
})
export class ManageFlightsComponent {
  showCreate = false;

  constructor(
    public dialog: MatDialog,
    public flightsService: FlightsService
  ) {}

  toggleShowCreate() {
    this.showCreate = !this.showCreate;
  }

  openDialog(): void {
    this.dialog.open(CreateFlightDialogComponent);
  }
}
