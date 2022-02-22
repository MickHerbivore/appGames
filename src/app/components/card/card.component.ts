import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from 'src/app/models/game.model';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() item: Game = {
    name: '',
    description: '',
    platform: '',
    img: ''
  };
  @Input() index: number = 0;

  @Output() agregarEvent = new EventEmitter<number>();
  @Output() eliminarEvent = new EventEmitter();

  constructor( private router: Router, private gameService: GamesService ) { }

  ngOnInit(): void {
  }

  agregarAlCarrito() {
    this.agregarEvent.emit(this.index);
  }

  detailGame() {
    this.router.navigate(['/game', this.index])
  }

  eliminar() {
    this.gameService.deleteGame(this.index).subscribe(resp => {
      console.log(resp);
      this.eliminarEvent.emit();
    });
  }

}
