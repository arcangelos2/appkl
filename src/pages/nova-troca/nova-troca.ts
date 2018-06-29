import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ServicosPage } from '../servicos/servicos';
import { LoginPage } from '../login/login';
import { UploadPage } from '../upload/upload';

@IonicPage()
@Component({
  selector: 'page-nova-troca',
  templateUrl: 'nova-troca.html',
})
export class NovaTrocaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toast:ToastController) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad NovaTrocaPage');
  }
  logout(){
  	this.navCtrl.parent.parent.setRoot(LoginPage);
  }

  enviar(){
    let toast = this.toast.create({
      message: 'Cliente troca de óleo agendada com sucesso',
      duration: 3000,
      position: 'top'
    });
    this.navCtrl.setRoot(ServicosPage);
    toast.onDidDismiss(() => {
      console.log('ok');
    });
  
    toast.present();
    
  }

  tirarFoto(){
    this.navCtrl.push(UploadPage);
  }

}
