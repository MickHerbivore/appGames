import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Game } from 'src/app/models/game.model';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  @Input() items: Game[] = [];
  @Output() deleteEvent: EventEmitter<number> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  deleteElement( index: number ) {
    this.deleteEvent.emit(index);
  }
}
