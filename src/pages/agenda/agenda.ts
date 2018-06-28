import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { NovaAgendaPage } from '../nova-agenda/nova-agenda';




@IonicPage()
@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html',
})
export class AgendaPage {

  constructor(public navCtrl: NavController) { }
  
  add(){
    this.navCtrl.push(NovaAgendaPage);
  }
    
}
