import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Tabs } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';
import { CadastroPage } from '../cadastro/cadastro';
import { Cliente } from '../../model/model-cliente';
import { ClienteProvider } from '../../providers/cliente/cliente';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: []
})
export class LoginPage {

  cliente = new Cliente();

  loginData = { email: '', senha: '' };
  
  authForm: FormGroup;
  email: AbstractControl;
  password: AbstractControl;
  passwordtype: string = 'password';
  passeye: string = 'eye';
  constructor(public toastCtrl: ToastController, public fb: FormBuilder, public navCtrl: NavController,
    public navParams: NavParams, public providerCliente: ClienteProvider) {
    this.authForm = this.fb.group({
      'email': [null, Validators.compose([Validators.required])],
      'password': [null, Validators.compose([Validators.required])],
    });

    this.email = this.authForm.controls['email'];
    this.password = this.authForm.controls['password'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  // For User Login

  userLogin(loginData) {

    this.providerCliente.loginCliente(loginData).subscribe((data: any) => {
      //aqui entra o menu controller para manipular a pagina
      
      if (data.status == true) {
        this.presentToast('login efetuado com sucesso!');
        //console.log(data);
        this.providerCliente.setStorage("cliente", data.cliente);
        this.moveToHome(this.loginData);
        
      } else {        
        console.log(data);
        this.presentToast(data.message);
        
      }
    })
    error => {
      this.presentToast('Aconteceu algum erro: !'+error);
    };

  }

  // Move to register page
  moveToCadastrar() {
    this.navCtrl.setRoot(CadastroPage);
  }

  //Move to Home Page
  moveToHome(res) {   
    this.navCtrl.setRoot(TabsPage, { res: res });
  }

  private presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
ss
  presentAlert(err) {

  }

  managePassword() {
    if (this.passwordtype == 'password') {
      this.passwordtype = 'text';
      this.passeye = 'eye-off';
    } else {
      this.passwordtype = 'password';
      this.passeye = 'eye';
    }
  }
  forgetpassword() {
    //this.navCtrl.setRoot(ForgetPage);
  }

}
