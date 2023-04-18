import {Component} from '@angular/core';
import {Personaje} from "../interfaces/dbz.interface";
import {DbzService} from "../services/dbz.service";


@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor(private dbzService: DbzService) { }

  get personajes(): Personaje[] {
    return [...this.dbzService.personajes];
  }

  get nuevo(): Personaje {
    return this.dbzService.nuevo;
  }

  onDeletePersonaje( id:string ):void {
    this.dbzService.deletePersonajeById( id );
  }

  onNewPersonaje( personaje: Personaje ){
    this.dbzService.addPersonaje( personaje);
  }

}
