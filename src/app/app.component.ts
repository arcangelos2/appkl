import { Component, ViewChild } from '@angular/core';
import { Platform, App, NavController, Tabs } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { LoginPage } from '../pages/login/login';
import { UploadPage } from '../pages/upload/upload';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
    
  @ViewChild('content') nav: NavController;
  rootPage: any = LoginPage;
  

  pages: Array<{title: string, index: any}>;
  

  constructor(private app: App,  
    platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    
     

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Inicio', index: 0 },
      { title: 'Locação', index: 1 },
      { title: 'Serviços', index: 2 },
      { title: 'Perfil', index: 3},
      { title: 'Contato', index: 4},
      
    ];

  
    platform.ready().then(() => {
      
      statusBar.styleDefault();
      splashScreen.hide();

      platform.registerBackButtonAction(() => {
        let nav = app.getActiveNavs()[0];
        let activeView = nav.getActive();
 
        if(activeView != null){
          if(nav.canGoBack())
            nav.pop();
          else if (typeof activeView.instance.backButtonAction === 'function')
            activeView.instance.backButtonAction();
          else
            nav.parent.select(0); // goes to the first tab
        }
      });
    });

  }
  

  openPage(p) {   
    this.nav.setRoot(TabsPage,{pagina:p.index});   
  }

}
