import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ServicosPage } from '../servicos/servicos';



@IonicPage()
@Component({
  selector: 'page-novo-balanceamento',
  templateUrl: 'novo-balanceamento.html',
})
export class NovoBalanceamentoPage {

  constructor( public toast:ToastController,
    public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
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
    let toast = this.toast.create({
      message: 'Cliente balancamento agendado com sucesso',
      duration: 3000,
      position: 'top'
    });
    this.navCtrl.setRoot(ServicosPage);
    toast.onDidDismiss(() => {
      console.log('ok');
    });
  
    toast.present();
    
  }

}
