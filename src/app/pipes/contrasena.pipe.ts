import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {
  transform(value: any, activar: boolean = false): any {
    return activar
      ? value
          .split('')
          .map(() => {
            return '*';
          })
          .join('')
      : value;
  }
}
