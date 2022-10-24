import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Post} from '../../modelos/post';
import {PostService} from '../../servicios/post.service';
import {Cine} from "../../modelos/Cine";
import {LoadingController} from "@ionic/angular";

@Component({
  selector: 'app-post-detalle',
  templateUrl: './post-detalle.page.html',
  styleUrls: ['./post-detalle.page.scss'],
})
export class PostDetallePage implements OnInit {

  public  id: number;
  public  loader = false;
  public post: Cine = new Cine();


  constructor(
    private postServicio: PostService,
    private url: ActivatedRoute,
    private router: Router,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.url.params.subscribe(
      res =>{
        this.id = res.cineid;
      }
    );
    this.obtenerPost();
  }

  obtenerPost(){
    this.postServicio.obtenerPost(this.id).subscribe(
      res => {
        this.post =res;
      }
    );
  }

  irAmodificar() {
    this.router.navigate(['/empleado-formulario'], {queryParams: this.post} );
  }

  activarDesactivar() {
    this.showLoading();
    this.postServicio.activarInactivar(this.post.cineid).subscribe(
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
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Dismissing after 3 seconds...',
      duration: 3000,
    });

    loading.present();
  }
}
