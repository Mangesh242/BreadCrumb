import { Component, OnInit } from '@angular/core';
import { CountryServiceService } from '../country-service.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  countries;
  constructor(private service:CountryServiceService) { }

  ngOnInit(): void {
    this.countries=this.service.getCountries();
   // console.log("Countries are ",this.service.getCountries())
  }

}
