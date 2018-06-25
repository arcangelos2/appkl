import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';
import { CalendarComponentOptions, CalendarModalOptions, CalendarModal, CalendarResult, DayConfig } from 'ion2-calendar';


@IonicPage()
@Component({
  selector: 'page-balanceamento',
  templateUrl: 'balanceamento.html',
})
export class BalanceamentoPage {

  date: string;
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  optionsRange: CalendarComponentOptions = {
    pickMode: 'range'
  };

  constructor(public modalCtrl: ModalController,
    public navCtrl: NavController, public navParams: NavParams,private calendar: Calendar) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BalanceamentoPage');
  }
  
  openCalendar() {
    const options: CalendarModalOptions = {
      monthFormat: '  MM YYYY',
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


