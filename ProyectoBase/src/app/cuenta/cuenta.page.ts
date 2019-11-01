import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPagePage } from '../modal-page/modal-page.page';
@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {

 
  public cuentas;
  constructor( private modalCtrl: ModalController) { }

  ngOnInit() {
    this.cuentas = [
      {Cantidad: 1555.00, Nombre: 'Crédito Banorte'},
      {Cantidad: 1.50, Nombre: 'Débito Banregio'},
      {Cantidad: -1555.00, Nombre: 'Crédito BBVA'}
    ];
  }

 async  AgregarCuenta() {
    const modal = await this.modalCtrl.create({
      component: ModalPagePage,
      componentProps: {
      }
    });
    await modal.present();

    const { data } = await modal.onDidDismiss();
    if (data) {
      console.log('Retorno de modal:', data);
      const newCount = this.cuentas.push({ Cantidad: data.Cantidad, Nombre: data.Nombre });
    }
  }


}
