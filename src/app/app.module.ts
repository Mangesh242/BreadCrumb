import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadCrumbComponent } from './bread-crumb/bread-crumb.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular material
import {MatCardModule} from '@angular/material/card';
import { CountriesComponent } from './countries/countries.component';
import { StatesComponent } from './states/states.component';
import { CityComponent } from './city/city.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BreadCrumbComponent,
    CountriesComponent,
    StatesComponent,
    CityComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
