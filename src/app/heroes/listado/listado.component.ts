import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{

  heroes: string[] = ['Spriderman', "Ironman", 'Spriderman', 'Thor'];

  heroDeleted: string = '';
  borrarHeroe(){
    const heroeBorrado: string = this.heroes.shift() || '';
    this.heroDeleted = heroeBorrado;
    console.log(heroeBorrado)
  }


}
