import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-novo-balanceamento',
  templateUrl: 'novo-balanceamento.html',
})
export class NovoBalanceamentoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NovoBalanceamentoPage');
  }

}
