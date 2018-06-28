import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController,ActionSheetController, ToastController, LoadingController } from 'ionic-angular';

import { Camera, CameraOptions } from '@ionic-native/camera';
import { Http } from '@angular/http';
import { FileTransfer, FileTransferObject, FileUploadOptions } from '@ionic-native/file-transfer';
import { LoginPage } from '../login/login';



@IonicPage()
@Component({
  selector: 'page-upload',
  templateUrl: 'upload.html',
})
export class UploadPage {
  
  imageFileName: any = "";
  nome: any;


  constructor(public navCtrl: NavController,
    private transfer: FileTransfer,
    private camera: Camera,
    public loadingCtrl: LoadingController,
    public http: Http, public actionSheetCtrl: ActionSheetController,
   
    public toastCtrl: ToastController) { }

    logout(){
      this.navCtrl.parent.parent.setRoot(LoginPage);
    }

  getImage() {
     this.imageFileName = "";
     
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true,
      targetWidth: 300,
      targetHeight: 300,


    }


    this.camera.getPicture(options).then((imageData) => {
      //this.imageUri = 'data:image/jpeg;base64,' + imageData;
      //this.imageFileName = this.imageUri;
      let base64image = 'data:image/jpeg;base64,' + imageData;
        this.imageFileName = base64image;
    }, (err) => {
      console.log(err);
      this.presentToast(err);
    });
  }

  doLogin() {
    this.enviarImage()
      .then((result: any) => {
        console.log(result);
        this.imageFileName = "https://operahouse.net.br/kl/arquivos/" + result.nome;
        this.toastCtrl.create({
          message: result.message, position: 'botton',
          duration: 3000
        }).present();
        this.imageFileName = '';
      })
      .catch((error: any) => {

      });
  }



  enviarImage() {

    return new Promise((resolve, reject) => {

      this.nome = Math.random();
      var data = {
        file: this.imageFileName,
        name: this.nome
      };

      this.http.post('https://operahouse.net.br/kl/api/arquivos/upload', data)
        .subscribe((result: any) => {
          resolve(result.json());
        },
          (error) => {
            console.log(error);
            reject(error.json());

          });
    });
  }

  //metodo em espera
  uploadFile() {
    let loader = this.loadingCtrl.create({
      content: "Uploading..."
    });
    loader.present();
    const fileTransfer: FileTransferObject = this.transfer.create();

    let options: FileUploadOptions = {
      fileKey: 'file',
      fileName: 'file',
      chunkedMode: false,
      mimeType: "image/jpeg",

      headers: {}
    }

    fileTransfer.upload(this.imageFileName, 'https://operahouse.net.br/kl/api/arquivos/upload', options)
      .then((data) => {
        console.log(data + " Uploaded Successfully");
        //this.imageFileName = "http://192.168.0.7:8080/static/images/ionicfile.jpg"
        loader.dismiss();
        this.presentToast("Image uploaded successfully");
      }, (err) => {
        console.log(err);
        loader.dismiss();
        this.presentToast(err);
      });
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 6000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
 
}
