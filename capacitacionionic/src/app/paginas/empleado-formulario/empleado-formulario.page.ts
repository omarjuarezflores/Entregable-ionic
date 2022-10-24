import { Component, OnInit } from '@angular/core';
import {Cine} from "../../modelos/Cine";
import {PostService} from "../../servicios/post.service";
import {Area} from "../../modelos/Area";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-empleado-formulario',
  templateUrl: './empleado-formulario.page.html',
  styleUrls: ['./empleado-formulario.page.scss'],
})
export class EmpleadoFormularioPage implements OnInit {

  private cine: Cine =  new Cine();
 
  constructor(
    private router: Router,
    private url: ActivatedRoute,
    private cineServicio: PostService
  ) { }

  ngOnInit() {
    this.url.queryParams.subscribe(
      queryParam => {
        this.cine = JSON.parse(JSON.stringify(queryParam));
      }
    )
  }
  cerrar(){
    this.router.navigate(['/post']);

  }
  guardar() {
    
    //this.empleado.area= new Area();
    //this.empleado.area.idArea = 1;
    const dato = {
      cineID: this.cine.cineid,
      cine: this.cine.nombre,
      fecha_alta: this.cine.fecha_alta,
      fecha_modificacion: this.cine.fecha_modificacion,
      registro_activo: this.cine.registro_activo,
      //area: {idArea: this.empleado.area.idArea},
    };
   
    this.cineServicio.guadarCine(dato).subscribe(res => {
      console.log(res);
      this.router.navigate(['/post']);
    });
  }
}
