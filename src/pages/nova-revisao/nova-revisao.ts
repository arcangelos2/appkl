import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ServicosPage } from '../servicos/servicos';
import { LoginPage } from '../login/login';



@IonicPage()
@Component({
  selector: 'page-nova-revisao',
  templateUrl: 'nova-revisao.html',
})
export class NovaRevisaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toast:ToastController) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad NovaRevisaoPage');
  }
 
  enviar(){
    let toast = this.toast.create({
      message: 'Cliente revisão agendada com sucesso',
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
