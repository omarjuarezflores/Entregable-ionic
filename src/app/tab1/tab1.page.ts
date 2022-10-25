import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public datoAlHijo: number = 10;

  constructor(
    private router: Router
  ) {}

  irANuevaPagina(){
    this.router.navigate(['/tabs/nueva/pagina','Amilcar', 26], {queryParams: {hola:'adios',  nombre: 'Amilcar***'}});
    // this.router.navigate(['/tabs/nueva/pagina','Amilcar', 26]);
  }

  actualizaDatoHijo(evento){
    console.log(evento);
  }
}
