import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryServiceService } from '../country-service.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  country;
  state;
  cities;
  constructor(private router: ActivatedRoute,
    private countryService: CountryServiceService) { }

  ngOnInit(): void {

    this.country=this.router.snapshot.paramMap.get('country');
    this.state=this.router.snapshot.paramMap.get('state')

    this.cities=this.countryService.getCities(this.country,this.state)
  }

}
