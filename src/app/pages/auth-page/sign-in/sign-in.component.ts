import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  loading = false;
  constructor(private authService: AuthService, private router: Router) {}

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  handleSubmit() {
    if (this.form.invalid) return;

    this.loading = true;

    const loginData = {
      email: this.form.value['email'] as string,
      password: this.form.value['password'] as string,
    };

    this.authService
      .signIn(loginData)
      .pipe(
        catchError((err) => {
          this.loading = false;
          return of();
        })
      )
      .subscribe((data) => {
        this.loading = false;
        this.authService.setJwt(data.token);
        this.router.navigate(['flights']);
      });
  }
}
