import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	userData:any;

  constructor(public navCtrl: NavController,
     public navParam: NavParams) {

  		this.userData = this.navParam.data;
  	

  }

  logout(){
  
  	this.navCtrl.parent.parent.setRoot(LoginPage);
    

  }

}
