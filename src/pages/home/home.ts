import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { NotificaoPage } from '../notificao/notificao';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  userData: any;
  private rootPage;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController,
    public navParam: NavParams) {

    this.userData = this.navParam.data;
  }
  //metodo para nao sair do celular
  backButtonAction() {
    //this.viewCtrl.dismiss();
  }
  notifications(){
    this.navCtrl.push(NotificaoPage);
  }
  sair(){
    this.navCtrl.parent.parent.setRoot(LoginPage);
   }

}