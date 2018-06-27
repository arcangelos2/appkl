import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicosPage } from '../servicos/servicos';

/**
 * Generated class for the NovaTrocaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nova-troca',
  templateUrl: 'nova-troca.html',
})
export class NovaTrocaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad NovaTrocaPage');
  }

  enviarOleo(){
    alert("Troca de óleo agendado");
    this.navCtrl.setRoot(ServicosPage);
  }

}
