import { Component, OnInit } from '@angular/core';
import{ ModalController,AlertController} from '@ionic/angular'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CuentaPage } from '../cuenta/cuenta.page';
@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.page.html',
  styleUrls: ['./modal-page.page.scss'],
})
export class ModalPagePage implements OnInit {
  addForm: FormGroup;
  submitted = false;

  constructor(private Fbuilder: FormBuilder,
              private modalCtrl: ModalController,
              private alertController: AlertController) 
              {
                this.addForm = this.Fbuilder.group({
                  nombre: ['', Validators.required],
                  cantidad: ['', Validators.compose([Validators.required])] /*fue para poner mas de una validacion*/
                });
              }

  ngOnInit() {
  }

  enviar( datos ) {
    console.log(datos);
    this.modalCtrl.dismiss({
      Nombre: datos.nombre,
      Cantidad: datos.cantidad
    });
  }

  salirAdd() {
    this.modalCtrl.dismiss();
  }

}
