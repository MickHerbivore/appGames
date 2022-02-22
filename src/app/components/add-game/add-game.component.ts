import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {

  formulario: FormGroup;

  constructor( private fb: FormBuilder, private gameService: GamesService, private router: Router ) {
    this.formulario = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      descripcion: ['', [Validators.required, Validators.minLength(3)]],
      plataforma: ['', [Validators.required, Validators.minLength(3)]],
      imagen: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  guardar() {
    this.createGame()
  }

  createGame() {
    let obj = {
      name: this.formulario.get('titulo')?.value,
      description: this.formulario.get('descripcion')?.value,
      platform: this.formulario.get('plataforma')?.value,
      img: ".assets/images/" + this.formulario.get('imgagen')?.value
    }

    this.gameService.sendGame(obj).subscribe( resp => {
      console.log(resp);
      
    })

    this.router.navigate(['/games']);
  }

}
