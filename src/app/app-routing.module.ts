import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { SignInComponent } from './pages/auth-page/sign-in/sign-in.component';
import { SignUpComponent } from './pages/auth-page/sign-up/sign-up.component';
import { FlightsPageComponent } from './pages/flights-page/flights-page.component';
import { authGuard } from './auth/auth.guard';
import { ManagePageComponent } from './pages/manage-page/manage-page.component';

const routes: Routes = [
  {
    path: '',
    component: AuthPageComponent,
    children: [
      { path: '', component: SignInComponent },
      { path: 'sign-up', component: SignUpComponent },
    ],
  },
  {
    path: 'flights',
    component: FlightsPageComponent,
    canActivate: [authGuard],
  },
  {
    path: 'manage',
    component: ManagePageComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
