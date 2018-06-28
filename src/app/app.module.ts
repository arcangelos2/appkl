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
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { BalanceamentoPageModule } from '../pages/balanceamento/balanceamento.module';
import { NovoBalanceamentoPageModule } from '../pages/novo-balanceamento/novo-balanceamento.module';
import { UploadPageModule } from '../pages/upload/upload.module';
import { HttpModule } from '@angular/http';
import { Calendar } from '@ionic-native/calendar';
import { AgendaPageModule } from '../pages/agenda/agenda.module';

import { CalendarModule } from "ion2-calendar";

import { NotificaoPageModule } from '../pages/notificao/notificao.module';
import { TrocaOleoPageModule } from '../pages/troca-oleo/troca-oleo.module';
import { NovaTrocaPageModule } from '../pages/nova-troca/nova-troca.module';
import { TrocaCorreiaPageModule } from '../pages/troca-correia/troca-correia.module';
import { NovaCorreiaPageModule } from '../pages/nova-correia/nova-correia.module';
import { RevisaoPageModule } from '../pages/revisao/revisao.module';
import { NovaRevisaoPageModule } from '../pages/nova-revisao/nova-revisao.module';
import { NovaAgendaPageModule } from '../pages/nova-agenda/nova-agenda.module';
import { NovaLocacaoPageModule } from '../pages/nova-locacao/nova-locacao.module';
import { Locacao24598PageModule } from '../pages/locacao24598/locacao24598.module';
import { DataServicoPageModule } from '../pages/data-servico/data-servico.module';
import { HoraServicoPageModule } from '../pages/hora-servico/hora-servico.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    
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
    UploadPageModule,
    HttpModule,
    AgendaPageModule,
    CalendarModule,
    NotificaoPageModule,
    TrocaOleoPageModule,
    NovaTrocaPageModule,
    TrocaCorreiaPageModule,
    NovaCorreiaPageModule,
    RevisaoPageModule,
    NovaRevisaoPageModule,
    NovaAgendaPageModule,
    NovaLocacaoPageModule,
    Locacao24598PageModule,
    DataServicoPageModule,
    HoraServicoPageModule,

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
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ClienteProvider,
    Camera,
    File,
    FilePath,
    FileTransfer,
    FilePath,
    FileTransfer,
    FileTransferObject,
    Calendar,
  ]
})
export class AppModule { }
