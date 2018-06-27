import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotificaoPage } from './notificao';

@NgModule({
  declarations: [
    NotificaoPage,
  ],
  imports: [
    IonicPageModule.forChild(NotificaoPage),
  ],
})
export class NotificaoPageModule {}
