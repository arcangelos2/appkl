import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BalanceamentoPage } from './balanceamento';

@NgModule({
  declarations: [
    BalanceamentoPage,
  ],
  imports: [
    IonicPageModule.forChild(BalanceamentoPage),
  ],
})
export class BalanceamentoPageModule {}
