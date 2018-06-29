import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-notificao',
  templateUrl: 'notificao.html',
})
export class NotificaoPage {
  
 

  constructor(public navCtrl: NavController, public navParams: NavParams, public camera:Camera) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad NotificaoPage');
  }
 
  
}
