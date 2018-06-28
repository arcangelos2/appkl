import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NovaTrocaPage } from '../nova-troca/nova-troca';
import { LoginPage } from '../login/login';


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
 
add(){
    this.navCtrl.push(NovaTrocaPage);
  }

}
