import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'ronaldo';
  nombreUpper: string = 'RONALDO';
  nombreCompleto: string = 'rOnAldO tORRes';

  fecha: Date = new Date();//Día de hoy

}
