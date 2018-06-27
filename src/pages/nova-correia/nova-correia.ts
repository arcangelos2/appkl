import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicosPage } from '../servicos/servicos';

/**
 * Generated class for the NovaCorreiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nova-correia',
  templateUrl: 'nova-correia.html',
})
export class NovaCorreiaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad NovaCorreiaPage');
  }
  enviarCorreia(){
    alert("Troca de correia agendada");
    this.navCtrl.setRoot(ServicosPage);
  }
}
