import { Component, OnInit } from '@angular/core';
import {PostService} from '../../servicios/post.service';
import {Post} from '../../modelos/post';
import {Router} from "@angular/router";
import {Cine} from "../../modelos/Cine";
import {LoadingController} from "@ionic/angular";
@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {


  public lista: Array<Cine>;
  public seleccionado: Cine = new Cine();
  public post: Cine = new Cine();
  public  loader = false;
  constructor(
    private router: Router,
    private postServicios: PostService,
    private loadingCtrl: LoadingController
  ) {
  }

  ngOnInit() {
    this.obtenerPosts();
  }

  obtenerPosts(){
    this.postServicios.obtenerPosts().subscribe(
      res => {
        this.lista = res;
      },
      error => {

      },
      ()=>{

      }
    );
  }

  seleccionar(dato: Cine) {
    this.router.navigate(['/post-detalle',dato.cineid]);
  }
  editar() {
    this.router.navigate(['/post']);
  }
  activarDesactivar(dato) {
    this.showLoading();
    this.postServicios.activarInactivar(dato).subscribe(
      respuesta => {
        console.log("correcto....", respuesta);
        this.post.registro_activo = !this.post.registro_activo;
        
      },
      error => {
        console.log("Ocurrio un error al modifacar el registro", error);
      },
      () => {
       
        this.loader = false;
        
      }
    );
  }async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Espere por favor...',
      duration: 500,
    });

    loading.present();
  }
}
