import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BalanceamentoPage } from '../balanceamento/balanceamento';
import { LoginPage } from '../login/login';

import { AgendaPage } from '../agenda/agenda';
import { CalendarioCorreiaPage } from '../calendario-correia/calendario-correia';



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
  logout(){
  	this.navCtrl.parent.parent.setRoot(LoginPage);
  }
  calendario(){
    this.navCtrl.push(AgendaPage);
  }
  correia(){
    this.navCtrl.push(CalendarioCorreiaPage);
  }
  
}
