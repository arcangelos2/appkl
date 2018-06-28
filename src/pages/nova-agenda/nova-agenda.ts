import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ServicosPage } from '../servicos/servicos';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-nova-agenda',
  templateUrl: 'nova-agenda.html',
})
export class NovaAgendaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public toast: ToastController) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad NovaAgendaPage');
  }

  logout(){
  	this.navCtrl.parent.parent.setRoot(LoginPage);
  }

  servicos(){
    
    let toast = this.toast.create({
      message: 'Cliente serviços agendado com sucesso',
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


