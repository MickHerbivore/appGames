import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../services/games.service';
import { Game } from '../../models/game.model';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  public games: Game[] = [];
  public carritoItems: Game[] = [];
  public local: any;

  constructor( private gamesService: GamesService ) { }

  ngOnInit(): void {
    this.getGames();
  }

  getGames() {
    this.gamesService.getData2().subscribe( resp => {
      let aux: any = resp;
      this.games = aux.mensaje;
    });

    this.local = localStorage.getItem('carrito');
    if (this.local?.length > 0) {
      this.carritoItems = JSON.parse(this.local);
    }
  }

  agregarAlCarrito( index: number ) {
    this.carritoItems.push(this.games[index]);
    localStorage.setItem('carrito', JSON.stringify(this.carritoItems));
  }

  deleteElement( index: number ) {
    this.carritoItems.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(this.carritoItems));
  }

}
