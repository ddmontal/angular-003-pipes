import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizar'
})
export class CapitalizarPipe implements PipeTransform {
  transform(value: string, todo: boolean = true): any {
    let nombres = value.toLowerCase().split(' ');
    if (todo) {
      for (let i in nombres) {
        nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substr(1);
      }
    } else {
      nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
    }

    return nombres.join(' ');
  }
}
