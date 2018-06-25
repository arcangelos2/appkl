import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ToastController } from 'ionic-angular';
import { Cliente } from '../../model/model-cliente';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { ClienteProvider } from '../../providers/cliente/cliente';
import { Camera, CameraOptions } from '@ionic-native/camera';



@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  img = '';
  
  confirmarSenha: any;

  cliente = new Cliente();
  cliente_temp: any;
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
  filePath: any;
  actionSheetCtrl: any;


  constructor(public platform: Platform, public toastCtrl: ToastController,public camera: Camera,
    public fb: FormBuilder, public navCtrl: NavController, public navParams: NavParams,
    public providerCliente: ClienteProvider) {


    this.authForm = this.fb.group({
      'nome': ['', Validators.compose([Validators.required])],
      'cpf': ['', Validators.compose([Validators.required])],
      'rg': ['', Validators.compose([Validators.required])],
      'email': ['', Validators.compose([Validators.required])],
      'senha': ['', Validators.compose([Validators.required])],
      'habilitacao': ['', Validators.compose([Validators.required])],
      'validade_hab': ['', Validators.compose([Validators.required])],
      'data_nascimento': ['', Validators.compose([Validators.required])],
      'cnfpass': ['', Validators.compose([Validators.required])]
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

    this.providerCliente.getStorage("cliente").then(cliente => {

      if (cliente) {
        this.cliente.id = cliente.id;
        this.providerCliente.showCliente(this.cliente).subscribe(res => {
          this.cliente = res;
        }, erro => {
          console.log("Erro: " + erro.message);
        });
      } else {
        // this.cancelar();
      }
    });

  }

  cadastrar() {
    if (this.cliente.senha == this.confirmarSenha) {
      this.providerCliente.cadastroCliente(this.cliente).subscribe((data: any) => {

        console.log(data);

        if (data.status == true) {
          this.presentToast('Cliente cadastrado com sucesso!');
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
  //funcao tirar foto a imagem ainda nao vai pro servidor 
tirarFoto() {
  const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,

    allowEdit: true,
    targetWidth: 100,
    targetHeight: 100
  }

  this.camera.getPicture(options).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64:
    this.img = 'data:image/jpeg;base64,' + imageData;
  }, (err) => {
    // Handle error
  });
}
  // foto para o perfil
  /*public presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Selecione a imagem',
      buttons: [
        {
          text: 'Galeria',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Camera',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }

  public takePicture(sourceType) {
    // Create options for the Camera Dialog
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
  
      allowEdit: true,
      targetWidth: 100,
      targetHeight: 100
    };
      // Get the data of an image
      this.camera.getPicture(options).then((imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64:
        this.img = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {
        // Handle error
      });
}*/


}