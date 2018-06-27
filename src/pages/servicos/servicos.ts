import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BalanceamentoPage } from '../balanceamento/balanceamento';
import { LoginPage } from '../login/login';

import { AgendaPage } from '../agenda/agenda';
import { CalendarioCorreiaPage } from '../calendario-correia/calendario-correia';
import { TrocaOleoPage } from '../troca-oleo/troca-oleo';
import { TrocaCorreiaPage } from '../troca-correia/troca-correia';
import { RevisaoPage } from '../revisao/revisao';



@IonicPage()
@Component({
  selector: 'page-servicos',
  templateUrl: 'servicos.html',
})
export class ServicosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ServicosPage');
  }

  balenceamento(){
    this.navCtrl.push(BalanceamentoPage);
  }
  trocaOleo(){
    this.navCtrl.push(TrocaOleoPage);
  }
  trocaCorreia(){
    this.navCtrl.push(TrocaCorreiaPage);
  }
  revisao(){
    this.navCtrl.push(RevisaoPage);
  }
  logout(){
  	this.navCtrl.parent.parent.setRoot(LoginPage);
  }
  
  
}
