import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GamesService } from '../../services/games.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.css']
})
export class EditGameComponent implements OnInit {
  
  formulario: FormGroup;
  id: any;

  constructor( private fb: FormBuilder, private gameService: GamesService, private activateRoute: ActivatedRoute, private router: Router ) {
    this.formulario = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      descripcion: ['', [Validators.required, Validators.minLength(3)]],
      plataforma: ['', [Validators.required, Validators.minLength(3)]],
      imagen: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe( params => {
      this.id = params['id'];
      this.getGame(this.id);
    })
  }

  chargeForm( data: any ) {
    let myData = data.mensaje;
    this.formulario = this.fb.group({
      titulo: [myData.name],
      descripcion: [myData.description],
      plataforma: [myData.platform],
      imagen: [myData.img],
    })
  }

  getGame(id: any) {
    this.gameService.getGame2( id ).subscribe( resp => {
      this.chargeForm(resp);
    })
  }

  actualizar() {
    let obj = {
      id: this.id,
      name: this.formulario.get('titulo')?.value,
      description: this.formulario.get('descripcion')?.value,
      platform: this.formulario.get('plataforma')?.value,
      img: this.formulario.get('imagen')?.value
    }

    this.gameService.updateGame(obj).subscribe( resp => {
      console.log(resp);      
    })

    this.router.navigate(['/games']);
  }

  

}
