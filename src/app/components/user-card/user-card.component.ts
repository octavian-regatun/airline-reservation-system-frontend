import { Component, Input } from '@angular/core';
import { AuthService, User } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent {
  @Input() user: User | null = null;

  constructor(private authService: AuthService) {}

  isOpen = false;

  signOut() {
    this.authService.signOut();
  }
}
