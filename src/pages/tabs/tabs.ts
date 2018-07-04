import { Component, ViewChild } from '@angular/core';


import { HomePage } from '../home/home';
import { PerfilPage } from '../perfil/perfil';
import { NavController, NavParams, Tabs } from 'ionic-angular';
import { LocacaoPage } from '../locacao/locacao';
import { ServicosPage } from '../servicos/servicos';
import { ContatoPage } from '../contato/contato';
import { LojasPage } from '../lojas/lojas';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  @ViewChild('myTabs') tabRef: Tabs;

  tab1Root = HomePage;
  tab2Root = PerfilPage;
  tab3Root = LocacaoPage;
  tab4Root = ServicosPage;
  tab5Root = ContatoPage;
  tab6Root = LojasPage;
 
 
  param : any;
  
  

  constructor(public navCtrl: NavController,
     public navParam: NavParams) {
  		this.param = this.navParam.get('pagina');    
     }

     ionViewDidEnter() {
      this.tabRef.select(this.param);
     }
    
  }
