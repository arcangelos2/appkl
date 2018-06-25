import { Component } from '@angular/core';


import { HomePage } from '../home/home';
import { PerfilPage } from '../perfil/perfil';
import { NavController, NavParams } from 'ionic-angular';
import { LocacaoPage } from '../locacao/locacao';
import { ServicosPage } from '../servicos/servicos';
import { BalanceamentoPage } from '../balanceamento/balanceamento';
import { UploadPage } from '../upload/upload';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PerfilPage;
  tab3Root = LocacaoPage;
  tab4Root = ServicosPage;
  tab5Root = BalanceamentoPage;
  tab6Root = UploadPage;

 

  userData:any;

  constructor(public navCtrl: NavController,
     public navParam: NavParams) {

  		this.userData = this.navParam.get('res');
  	
     }
  }
