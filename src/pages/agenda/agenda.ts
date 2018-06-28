import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { NovaAgendaPage } from '../nova-agenda/nova-agenda';
import { LoginPage } from '../login/login';



@IonicPage()
@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html',
})
export class AgendaPage {

  constructor(public navCtrl: NavController) { }
  logout(){
    this.navCtrl.setRoot(LoginPage);
  }
  outros(){
    this.navCtrl.push(NovaAgendaPage);
  }
    
}
