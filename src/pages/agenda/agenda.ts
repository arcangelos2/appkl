import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { CalendarModalOptions, CalendarModal, CalendarResult } from 'ion2-calendar';


@IonicPage()
@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html',
})
export class AgendaPage {

  date: string;
 
  
  
  constructor(public navCtrl: NavController, private modalCtrl: ModalController, 
    private alertCtrl: AlertController) { }
 
    openCalendar() {
      const options: CalendarModalOptions = {
        monthFormat: '  MM YYYY ',
        weekdays: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'],
        weekStart: 1,
        defaultDate: new Date()
      };
   
      let myCalendar =  this.modalCtrl.create(CalendarModal, {
        options: options
      });
   
      myCalendar.present();
   
      myCalendar.onDidDismiss((date: CalendarResult, type: string) => {
        console.log(date);
      });
    }
}
