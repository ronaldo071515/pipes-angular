import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  /* i18nSelect */
  nombre: string = 'Ronaldo';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  cambiarPersona() {
    this.nombre = 'Andrea';
    this.genero = 'femenino'
  }

  /* i18nPlurar */
  clientes: string [] = ['Maria', 'Pedro', 'Ronaldo', 'David', 'Juana', 'Andrea'];

  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  borrarCliente() {
    this.clientes.pop();
  }


  //key value Pipe
  persona = {
    nombre: 'Ronaldo',
    edad: 22,
    direccion: 'Salazar, Norte de santander'
  }

  //JSON Pipe
  heores = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: true
    }
  ]

  //Async pipe
  miObservable = interval(1000);

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve( 'Tenemos data de promesa' );
    }, 3500);
  });

}
