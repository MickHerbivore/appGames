import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private items: Game[] = [
    {
      name:"Super Mario Kart",
      description: "Juego de aventuras",
      platform : "Nintendo",
      img : "./assets/images/mariokart.jpg"
    },
    {
      name:"Gran turismo",
      description: "Juego de carreras",
      platform : "PlayStation",
      img : "./assets/images/gt.jpg"
    },
    {
      name:"GTA",
      description: "Juego de aventuras",
      platform : "Todas las plataformas",
      img : "./assets/images/gta.jpg"
    },
    {
      name:"Mortal Kombat",
      description: "Juego de peleas",
      platform : "Todas las plataformas",
      img : "./assets/images/mk.jpg"
    },
    {
      name:"Pokemon",
      description: "Juego de estrategia y aventura",
      platform : "Nintendo Switch",
      img : "./assets/images/pokemon.jpg"
    }
  ];

  private url = 'http://localhost:3001';

  constructor( private http: HttpClient ) { }

  getData() {
    return this.items;
  }

  getData2() {
    return this.http.get(`${ this.url }/products`);
  }

  getGame( id: number ){
    return this.items[id];
  }

  getGame2( id: number ){
    return this.http.get(`${ this.url }/product/${ id }`);
  }

  sendGame( game: any ) {
    return this.http.post(`${ this.url }/product`, game);
  }

  updateGame( data: any ) {
    return this.http.put(`${ this.url }/product/${ data.id }`, data);
  }

  deleteGame( id: any ) {
    return this.http.delete(`${ this.url }/product/${ id }`);
  }

}
