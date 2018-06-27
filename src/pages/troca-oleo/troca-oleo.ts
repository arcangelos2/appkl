import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NovaTrocaPage } from '../nova-troca/nova-troca';

/**
 * Generated class for the TrocaOleoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-troca-oleo',
  templateUrl: 'troca-oleo.html',
})
export class TrocaOleoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad TrocaOleoPage');
  }
  trocaOleo(){
    this.navCtrl.push(NovaTrocaPage);
  }

}
