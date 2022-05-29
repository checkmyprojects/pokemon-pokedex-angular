import { Component, OnInit } from '@angular/core';

// Import our service
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
// @Component({
//   selector: 'app-pokemon-list',
//   templateUrl: './pokemon-list.component.html',
//   styles: [
//   ]
// })
export class PokemonListComponent implements OnInit {

  // Array to store our pokemons data
  pokemons: any[] = [];

  // The page number we are at, default will be 1
  page = 1;

  // Where to save the number of pokemons we have on our page
  totalPokemons: number | undefined;

  constructor(
    // add service to the constructor
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    // Launch getPokemons on init
    this.dataService.getPokemons()
    .subscribe((response: any) => {
      // save the amount of pokemons we get from api into the variable
      this.totalPokemons = response.count;

      response.results.forEach((result: any) => {
        this.dataService.getMoreData(result.name)
        .subscribe((uniqResponse: any) => {
          this.pokemons.push(uniqResponse); //We get data from every pokemon we have and push data into pokemons array
          console.log(this.pokemons);
        });
      });
    })
  }

}
