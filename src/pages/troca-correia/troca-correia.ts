import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NovaCorreiaPage } from '../nova-correia/nova-correia';
import { LoginPage } from '../login/login';

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
  
  add(){
    this.navCtrl.push(NovaCorreiaPage);
  }

}
