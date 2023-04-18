import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Personaje} from "../interfaces/dbz.interface";

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  @Input('data')
  personajes: Personaje[] = [];


  @Output()
  public onDelete : EventEmitter<string> = new EventEmitter();
  public onDeleteCharacter(index:string): void{

    //console.log(index);
    this.onDelete.emit( index );
  }

}
