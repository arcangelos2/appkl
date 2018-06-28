import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NovaRevisaoPage } from '../nova-revisao/nova-revisao';
import { LoginPage } from '../login/login';


@IonicPage()
@Component({
  selector: 'page-revisao',
  templateUrl: 'revisao.html',
})
export class RevisaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
   // console.log('ionViewDidLoad RevisaoPage');
  }
  logout(){
  	this.navCtrl.parent.parent.setRoot(LoginPage);
  }
  revisao(){
    this.navCtrl.push(NovaRevisaoPage);
  }

}
