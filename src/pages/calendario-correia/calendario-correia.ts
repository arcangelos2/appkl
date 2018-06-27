import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';



@IonicPage()
@Component({
  selector: 'page-calendario-correia',
  templateUrl: 'calendario-correia.html',
})
export class CalendarioCorreiaPage {

  calendars = [];
 
  constructor(public navCtrl: NavController, private calendar: Calendar, private plt: Platform) {
    this.plt.ready().then(() => {
      this.calendar.listCalendars().then(data => {
        this.calendars = data;
      });
    })
  }
 
  addEvent(cal) {
    let date = new Date();
    let options = { calendarId: cal.id, calendarName: cal.name, url: 'https://ionicacademy.com', firstReminderMinutes: 15 };
 
    this.calendar.createEventInteractivelyWithOptions('My new Event', 'Münster', 'Special Notes', date, date, options).then(res => {
    }, err => {
      console.log('err: ', err);
    });
  }
 
  openCal(cal) {
    this.navCtrl.push('CalDetailsPage', { name: cal.name })
  }

}