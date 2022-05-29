import { Component, OnInit } from '@angular/core';

// Import our service
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styles: [
  ]
})
export class PokemonListComponent implements OnInit {

  constructor(
    // add service to the constructor
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    // Launch getPokemons on init
    this.dataService.getPokemons()
    .subscribe((response: any) =>{
      console.log(response);
    })
  }

}
