import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { NovoBalanceamentoPage } from '../novo-balanceamento/novo-balanceamento';
import { LoginPage } from '../login/login';


@IonicPage()
@Component({
  selector: 'page-balanceamento',
  templateUrl: 'balanceamento.html',
})
export class BalanceamentoPage {



  constructor(public modalCtrl: ModalController, private viewCtrl : ViewController, 
    public navCtrl: NavController, public navParams: NavParams) {
  }
  //metodo para não sair do celular
  

  ionViewDidLoad() {
    //console.log('ionViewDidLoad BalanceamentoPage');
  }
 
  novoBalanceamento() {
    this.navCtrl.push(NovoBalanceamentoPage);
  }


}


