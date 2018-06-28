import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ToastController } from 'ionic-angular';
import { FormGroup, AbstractControl, Validators, FormBuilder } from '@angular/forms';
import { LoginPage } from '../login/login';
import { ClienteProvider } from '../../providers/cliente/cliente';
import { Cliente } from '../../model/model-cliente';



@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {


  confirmarSenha: any;

  cliente = new Cliente();
  authForm: FormGroup;
  nome: AbstractControl;
  cpf: AbstractControl;
  rg: AbstractControl;
  email: AbstractControl;
  senha: AbstractControl;
  habilitacao: AbstractControl;
  validade_hab: AbstractControl;
  data_nascimento: AbstractControl;
  cnfpass: AbstractControl;
  passwordtype: string = 'password';
  cnfpasswordtype: string = 'password';
  cnfpasseye: string = 'eye';
  passeye: string = 'eye';


  constructor(public platform: Platform, public toastCtrl: ToastController,
    public fb: FormBuilder, public navCtrl: NavController, public navParams: NavParams,
    public providerCliente: ClienteProvider) {
    this.authForm = this.fb.group({
      'nome': [null, Validators.compose([Validators.required])],
      'cpf': [null, Validators.compose([Validators.required])],
      'rg': [null, Validators.compose([Validators.required])],
      'email': [null, Validators.compose([Validators.required])],
      'senha': [null, Validators.compose([Validators.required])],
      'habilitacao': [null, Validators.compose([Validators.required])],
      'validade_hab': [null, Validators.compose([Validators.required])],
      'data_nascimento': [null, Validators.compose([Validators.required])],
      'cnfpass': [null, Validators.compose([Validators.required])]
    });

    this.nome = this.authForm.controls['nome'];
    this.cpf = this.authForm.controls['cpf'];
    this.rg = this.authForm.controls['rg'];
    this.email = this.authForm.controls['email'];
    this.senha = this.authForm.controls['senha'];
    this.habilitacao = this.authForm.controls['habilitacao'];
    this.validade_hab = this.authForm.controls['validade_hab'];
    this.data_nascimento = this.authForm.controls['data_nascimento'];
    this.cnfpass = this.authForm.controls['cnfpass'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  cadastrar() {
    if (this.cliente.senha == this.confirmarSenha) {
      this.providerCliente.cadastroCliente(this.cliente).subscribe((data: any) => {
        
        console.log(data);
        
        if (data.status == true) {
          this.presentToast('Cliente cadastrado com sucesso!');
          this.navCtrl.setRoot(LoginPage);
        } else {
          this.presentToast('Cliente não foi cadastrado!');
        }

      })
      error => {
        console.log(error);
        this.presentToast('Aconteceu algum erro ao salvar!');
      };
    } else {
      this.presentToast('Senha não confere com a confirmação!')
    }
  }
  //



  moveToLogin() {
    this.navCtrl.setRoot(LoginPage);
  }

  private presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
    toast.present();
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
  managecnfPassword() {
    if (this.cnfpasswordtype == 'password') {
      this.cnfpasswordtype = 'text';
      this.cnfpasseye = 'eye-off';
    } else {
      this.cnfpasswordtype = 'password';
      this.cnfpasseye = 'eye';
    }
  }

}

