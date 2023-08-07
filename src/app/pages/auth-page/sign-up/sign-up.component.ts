import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  signUpSubscription?: Subscription;

  constructor(private authService: AuthService, private router: Router) {}

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  handleSubmit() {
    if (this.form.invalid) return;

    const loginData = {
      email: this.form.value['email'] as string,
      firstName: this.form.value['firstName'] as string,
      lastName: this.form.value['lastName'] as string,
      password: this.form.value['password'] as string,
    };

    this.authService.signUp(loginData).subscribe((data) => {
      this.authService.setJwt(data.token);
      this.router.navigate(['flights']);
    });
  }
}
