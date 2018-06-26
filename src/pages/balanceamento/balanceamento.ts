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
  backButtonAction() {
    this.viewCtrl.dismiss();
}

  ionViewDidLoad() {
    //console.log('ionViewDidLoad BalanceamentoPage');
  }
  logout() {
    this.navCtrl.parent.parent.setRoot(LoginPage);
  }

  novoBalanceamento() {
    this.navCtrl.push(NovoBalanceamentoPage);
  }


}


