import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NovaLocacaoPage } from '../nova-locacao/nova-locacao';
import { Locacao24598Page } from '../locacao24598/locacao24598';


@IonicPage()
@Component({
  selector: 'page-locacao',
  templateUrl: 'locacao.html',
})
export class LocacaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad LocacaoPage');
  }
  addLocacao(){
  	this.navCtrl.push(NovaLocacaoPage);
  }

  contrato(){
    this.navCtrl.push(Locacao24598Page);
  }
}
