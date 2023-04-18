import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Personaje} from "../interfaces/dbz.interface";

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  @Input()
  character: Personaje = {
    nombre: '',
    poder: 0
  }

  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter<Personaje>()

  agregar(  ){
    if( this.character.nombre.trim().length == 0 ){ return ; }

    console.log(this.character)
    this.onNuevoPersonaje.emit( this.character );

    this.character = {
      nombre:'',
      poder:0
    }

  }

}
