import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../../models/game.model';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-detail-game',
  templateUrl: './detail-game.component.html',
  styleUrls: ['./detail-game.component.css']
})
export class DetailGameComponent implements OnInit {

  game: Game | null = null;

  constructor( private activatedRoute: ActivatedRoute, private service: GamesService ) {
    this.activatedRoute.params.subscribe( data => {
      console.log(data['id']);
      this.game = this.service.getGame(data['id']);
    });
  }

  ngOnInit(): void {
  }

}
