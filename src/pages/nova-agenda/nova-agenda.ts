import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ServicosPage } from '../servicos/servicos';
import { UploadPage } from '../upload/upload';


@IonicPage()
@Component({
  selector: 'page-nova-agenda',
  templateUrl: 'nova-agenda.html',
})
export class NovaAgendaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toast: ToastController) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad NovaAgendaPage');
  }
  tirarFoto() {
    this.navCtrl.push(UploadPage);
  }


  enviar() {

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


