import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NovaTrocaPage } from './nova-troca';

@NgModule({
  declarations: [
    NovaTrocaPage,
  ],
  imports: [
    IonicPageModule.forChild(NovaTrocaPage),
  ],
})
export class NovaTrocaPageModule {}
