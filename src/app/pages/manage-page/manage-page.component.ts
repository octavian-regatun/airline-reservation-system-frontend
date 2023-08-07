import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-page',
  templateUrl: './manage-page.component.html',
  styleUrls: ['./manage-page.component.scss'],
})
export class ManagePageComponent {
  showCreateFlight = false;

  toggleCreateFlight() {
    this.showCreateFlight = !this.showCreateFlight;
  }
}
