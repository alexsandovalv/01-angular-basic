import {Injectable} from '@angular/core';
import {v4 as uuid} from 'uuid';

import {Personaje} from "../interfaces/dbz.interface";

@Injectable({
  providedIn: "root"
})
export class DbzService {

  personajes: Personaje[] = [
    {
      id: uuid(),
      nombre: "Goku",
      poder: 1500
    },
    {
      id: uuid(),
      nombre: "Vegeta",
      poder: 7500
    },
    {
      id: uuid(),
      nombre: "Trunk",
      poder: 2500
    },
    {
      id: uuid(),
      nombre: "Picoro",
      poder: 300
    }
  ]

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  addPersonaje(item: Personaje) {
    const newCharacter: Personaje = {
      id: uuid(), ...item
    };
    this.personajes.push(newCharacter);
  }

  /*onDeleteCharacter(index: number) {
    this.personajes.splice(index, 1);
  }*/

  deletePersonajeById(id: string) {
    this.personajes = this.personajes.filter(p => p.id
      !== id);
  }

}
