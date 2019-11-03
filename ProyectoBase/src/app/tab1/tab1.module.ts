import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ModalPagePage } from '../modal-page/modal-page.page';
import { ModalPagePageModule } from '../modal-page/modal-page.module';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page
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
  declarations: [Tab1Page]
  
})
export class Tab1PageModule {}
