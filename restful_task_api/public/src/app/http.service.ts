import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
    this.getPokemon();
  }

  getPokemon() {

    let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');

    bulbasaur.subscribe(data => {

      let abilityName = data['abilities'][0]['ability'].name;

      console.log("Bulbasaur has an ability called", abilityName);

      
    });

  }
}
