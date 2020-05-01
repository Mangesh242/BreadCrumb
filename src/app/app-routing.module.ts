import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CountriesComponent } from './countries/countries.component';
import { StatesComponent } from './states/states.component';
import { CityComponent } from './city/city.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    data: { breadcrumb: "" }
  },
  {
    path: 'dashboard',
    data: { breadcrumb: "Dashboard" },
    children: [
      { path: '', component: CountriesComponent },
      {
        path: ':country',
        data: { breadcrumb: ':country' },
        children: [
          { path: '', component: StatesComponent },
          { path: ':state', component: CityComponent ,
          data: { breadcrumb: ':state' }}
        ]
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
