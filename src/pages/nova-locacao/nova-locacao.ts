import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-nova-locacao',
  templateUrl: 'nova-locacao.html',
})
export class NovaLocacaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad NovaLocacaoPage');
  }

  enviarLocacao(){
 
      let alert = this.alertCtrl.create({
        title: 'Caro Cliente',
        subTitle: 'Em breve você recerá nossa notificação de locação',
        buttons: ['ok']
      });
      alert.present();
    }
  }
