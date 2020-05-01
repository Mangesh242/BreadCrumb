import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryServiceService } from '../country-service.service';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.scss']
})
export class StatesComponent implements OnInit {

  constructor(private router:ActivatedRoute,private countryService:CountryServiceService) {
  
   }
   states;
   country;

  ngOnInit(): void {
  
  this.country=this.router.snapshot.paramMap.get("country")
  this.states=this.countryService.getStates(this.country)
  }

}
