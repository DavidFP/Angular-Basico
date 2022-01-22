import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent {
  heroes: string[] = [
    'Spiderman',
    'Ironman',
    'Hulk',
    'Thor',
    'Spiderman2',
    'Ironman2',
    'Hulk2',
    'Thor2',
  ];

  heroesBorrados: string[] = [];

  borrarHeroe(): void {
    let borrado = this.heroes.shift();
    if (borrado) {
      this.heroesBorrados.push(borrado);
    }
  }
}
