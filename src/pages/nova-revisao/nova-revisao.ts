import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicosPage } from '../servicos/servicos';

/**
 * Generated class for the NovaRevisaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nova-revisao',
  templateUrl: 'nova-revisao.html',
})
export class NovaRevisaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad NovaRevisaoPage');
  }

  enviarRevisao(){
    alert("Revisão agendado com suceeso");
    this.navCtrl.setRoot(ServicosPage);
  }

}
