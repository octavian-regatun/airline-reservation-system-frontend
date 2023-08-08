import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { FlightsPageComponent } from './pages/flights-page/flights-page.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { SignInComponent } from './pages/auth-page/sign-in/sign-in.component';
import { SignUpComponent } from './pages/auth-page/sign-up/sign-up.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { ManagePageComponent } from './pages/manage-page/manage-page.component';
import { CreateFlightComponent } from './components/create-flight/create-flight.component';
import { CreateAircraftComponent } from './components/create-aircraft/create-aircraft.component';
import { ManageAircraftComponent } from './components/manage-aircraft/manage-aircraft.component';
import { AircraftCardComponent } from './components/aircraft-card/aircraft-card.component';
import { ManageAirportComponent } from './components/manage-airport/manage-airport.component';
import { CreateAirportComponent } from './components/create-airport/create-airport.component';
import { AirportCardComponent } from './components/airport-card/airport-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthPageComponent,
    SignUpComponent,
    SignInComponent,
    FlightsPageComponent,
    NavbarComponent,
    LayoutComponent,
    UserCardComponent,
    ManagePageComponent,
    CreateFlightComponent,
    CreateAircraftComponent,
    ManageAircraftComponent,
    AircraftCardComponent,
    ManageAirportComponent,
    CreateAirportComponent,
    AirportCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
