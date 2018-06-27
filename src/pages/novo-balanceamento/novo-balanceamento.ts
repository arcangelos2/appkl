import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ServicosPage } from '../servicos/servicos';



@IonicPage()
@Component({
  selector: 'page-novo-balanceamento',
  templateUrl: 'novo-balanceamento.html',
})
export class NovoBalanceamentoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NovoBalanceamentoPage');
  }

  //metodo para nao sair do celular
  backButtonAction() {
    this.viewCtrl.dismiss();
  }
  logout() {
    this.navCtrl.parent.parent.setRoot(LoginPage);
  }
  enviarBalanceamento(){
    alert("Balanceamento agendado com suceeso");
    this.navCtrl.setRoot(ServicosPage);
  }

}
