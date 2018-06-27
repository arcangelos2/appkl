import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NovaCorreiaPage } from '../nova-correia/nova-correia';

/**
 * Generated class for the TrocaCorreiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-troca-correia',
  templateUrl: 'troca-correia.html',
})
export class TrocaCorreiaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad TrocaCorreiaPage');
  }
  trocaCrreia(){
    this.navCtrl.push(NovaCorreiaPage);
  }

}
