import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LojaPraca14Page } from '../loja-praca14/loja-praca14';
import { LojaMatrizPage } from '../loja-matriz/loja-matriz';

/**
 * Generated class for the LojasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lojas',
  templateUrl: 'lojas.html',
})
export class LojasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad LojasPage');
  }
  praca14() {
    this.navCtrl.push(LojaPraca14Page);
  }
  matriz() {
    this.navCtrl.push(LojaMatrizPage);
  }
}
