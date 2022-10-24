import {Component, OnDestroy, OnInit} from '@angular/core';
import {AlertController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-nueva-pagina',
  templateUrl: './nueva-pagina.page.html',
  styleUrls: ['./nueva-pagina.page.scss'],
})
export class NuevaPaginaPage implements OnInit,OnDestroy {

  public isModalOpen = false;

  public nombre: string;
  public nombreQuery: string;
  public edad: number;

  constructor(
    private alertController: AlertController,
    private url: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.url.params.subscribe(
      params => {
        this.nombre = params.nombre;
        this.edad = parseInt(params.edad);
      },
      error => {},
      () =>{
      }
    );
    this.url.queryParams.subscribe(
      params => {
        this.nombreQuery = params.nombre;
      },
      error => {},
      () =>{
      }
    );
    this.presentAlert();
  }

  ngOnDestroy() {
    console.log('componente destruido');
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Bienvenido',
      message: this.nombre+' '+(this.edad+5),
      buttons: ['pues que chido'],
    });

    await alert.present();
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

}
