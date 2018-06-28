import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';


@IonicPage()
@Component({
  selector: 'page-notificao',
  templateUrl: 'notificao.html',
})
export class NotificaoPage {
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad NotificaoPage');
  }
  logout(){
  	this.navCtrl.parent.parent.setRoot(LoginPage);
  }
}
