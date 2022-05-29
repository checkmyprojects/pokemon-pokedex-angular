import { Injectable } from '@angular/core';

// Import HttpClient and add it to constructor
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
    ) { }

    // Get Pokemons from API
    getPokemons(){
      // conenct to the api requesting just 10 pokemons
      // that is how this api is built
      return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=10`)
    }

}
