import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PerfilPageModule } from '../pages/perfil/perfil.module';
import { LoginPageModule } from '../pages/login/login.module';

import { ClienteProvider } from '../providers/cliente/cliente';

import { ServicosPageModule } from '../pages/servicos/servicos.module';
import { LocacaoPageModule } from '../pages/locacao/locacao.module';
import { CadastroPageModule } from '../pages/cadastro/cadastro.module';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { FilePath } from '@ionic-native/file-path';
import { FileTransfer } from '@ionic-native/file-transfer';

import { BalanceamentoPageModule } from '../pages/balanceamento/balanceamento.module';
import { Calendar } from '@ionic-native/calendar';
import { CalendarModule } from 'ion2-calendar';
import { NovoBalanceamentoPageModule } from '../pages/novo-balanceamento/novo-balanceamento.module';
import { UploadPageModule } from '../pages/upload/upload.module';





@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule,
    PerfilPageModule,
    LoginPageModule,
    ServicosPageModule,
    LocacaoPageModule,
    CadastroPageModule,
    BalanceamentoPageModule,
    NovoBalanceamentoPageModule,
    CalendarModule,
    UploadPageModule
   
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,    
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ClienteProvider,
    Camera,
    Calendar,
  
    File,
    FilePath,
    FileTransfer
   
    
  ]
})
export class AppModule {}
