import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Endpoint base de listado de pokemons.
const pokemonUrl: string = 'https://pokeapi.co/api/v2/pokemon/';


@Injectable({
  providedIn: 'root'
})
export class PokeServiceService {

  constructor(public http: HttpClient) { }

  public pokemonList() {
    const list: Observable <any> = this.http.get(pokemonUrl);
    return list;
  }

  public getPokemon(direcction: string) {
    const observableDetails: Observable <any> = this.http.get(direcction);
    return observableDetails;
  }
}

export interface UrlPokemon {
  name: string;
  url: string;
}

export interface PokemonDetails {
  name: string;
  height: number;
  weight: number;
  front_default: string;
}

