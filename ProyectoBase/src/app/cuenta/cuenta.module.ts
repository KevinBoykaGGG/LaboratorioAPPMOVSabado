import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CuentaPage } from './cuenta.page';
import { ModalPagePage } from '../modal-page/modal-page.page';
import { ModalPagePageModule } from '../modal-page/modal-page.module';

const routes: Routes = [
  {
    path: '',
    component: CuentaPage
  }
];

@NgModule({
  entryComponents: [
    ModalPagePage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ModalPagePageModule,
    
  ],
  declarations: [CuentaPage]
  
})
export class CuentaPageModule {}
