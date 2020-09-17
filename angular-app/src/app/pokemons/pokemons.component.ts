import { Component, OnInit } from '@angular/core';
import { UrlPokemon, PokeServiceService, PokemonDetails } from '../poke-service.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {
  public list: UrlPokemon[] = [];
  public detail: PokemonDetails[] = [];

  public namePokemon: string = '';
  public imagePokemon: string = '';
  public weightPokemon: number = null;
  public heightPokemon: number = null;

  constructor(private pokeService: PokeServiceService) {

   }

  ngOnInit(): void {
    this.pokeService.pokemonList().subscribe((data) => {
      this.list = data.results;
      });
    }
  public pokemonDetail(pokemon) {
    this.pokeService.getPokemon(pokemon.url).subscribe((detail) => {
      console.log(detail);
      this.namePokemon = detail.name;
      this.imagePokemon = detail.sprites.front_default;
      this.weightPokemon = detail.weight;
      this.heightPokemon = detail.height;
    });
  }
}

