import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryServiceService {

  constructor() { }


  countries = [
    {
      Country: "India", states: [
        {
          state: "Maharashtra", cities: ["Mumbai", "Pune"]
        },
        {
          state: "Delhi", cities: ["Agra", "Gaziabad"]
        }
      ]
    },

    {
      Country: "AUS", states: [
        {
          state: "Queensland", cities: ["Townsville", "Mackay"]
        },
        {
          state: "Tasmania", cities: ["Hobart", "Devonport"]
        }
      ]
    },
  ]


  getCountries() {
    return this.countries;

  }

  getStates(country){

    for(var i of this.countries)
    {
      if(i["Country"]==country){
          return i["states"];
      }
    }

  }

  getCities(country,state)
  {

    for(var i of this.countries)
    {
      if(i["Country"]==country){
        
          for(var j of i["states"])
          {
            if(j["state"]==state){
              return j["cities"]
            }
          }
      }
    
    }

  }


}
