import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NovaLocacaoPage } from './nova-locacao';

@NgModule({
  declarations: [
    NovaLocacaoPage,
  ],
  imports: [
    IonicPageModule.forChild(NovaLocacaoPage),
  ],
})
export class NovaLocacaoPageModule {}
