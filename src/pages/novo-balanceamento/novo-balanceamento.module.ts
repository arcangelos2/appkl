import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NovoBalanceamentoPage } from './novo-balanceamento';

@NgModule({
  declarations: [
    NovoBalanceamentoPage,
  ],
  imports: [
    IonicPageModule.forChild(NovoBalanceamentoPage),
  ],
})
export class NovoBalanceamentoPageModule {}
