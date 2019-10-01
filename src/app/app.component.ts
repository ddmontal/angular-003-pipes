import { Component } from '@angular/core';
import { resolve, reject } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nombre = 'David';
  nombre2 = 'daVid montAlvillo';

  array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI = Math.PI;
  n = 0.234;
  precio = 2323.415;

  heroe = {
    nombre: 'Tony',
    clave: 'Ironman',
    edad: '40',
    direccion: {
      calle: 'primera'
    }
  };

  valorDePromesa = new Promise((resolve, reject) => {
    setTimeout(
      () => resolve('Termino de cargar')
    , 3000);
  });

  fecha = new Date();

  video = "bON-KPiiNCk"

}
