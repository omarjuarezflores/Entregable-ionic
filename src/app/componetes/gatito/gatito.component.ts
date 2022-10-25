import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-gatito',
  templateUrl: './gatito.component.html',
  styleUrls: ['./gatito.component.scss'],
})
export class GatitoComponent implements OnInit {


  @Input() dato1: number;
  @Input() dato2: number;
  @Output() regrsarAlPadre = new EventEmitter<number>();



  public varible1: number;
  public varible2: number;
  public resultado: number;

  constructor(private alertController: AlertController) {
  }

  ngOnInit() {
  }
  suma(){
    this.regrsarAlPadre.emit(this.dato1);
    this.resultado = this.varible1 + this.varible2;
  }

  dividir(){
    this.resultado = this.varible1/this.varible2;
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Mensaje importante',
      message: 'esto es una alerta!',
      buttons: ['pues que chido'],
    });

    await alert.present();
  }

  correr(){
    console.log('metodo correr');
  }

  maullar(){
    console.log('metodo maullar');
  }
}
