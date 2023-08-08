import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-flights',
  templateUrl: './manage-flights.component.html',
})
export class ManageFlightsComponent {
  showCreate = false;

  toggleShowCreate() {
    this.showCreate = !this.showCreate;
  }
}
