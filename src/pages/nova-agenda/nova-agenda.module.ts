import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NovaAgendaPage } from './nova-agenda';

@NgModule({
  declarations: [
    NovaAgendaPage,
  ],
  imports: [
    IonicPageModule.forChild(NovaAgendaPage),
  ],
})
export class NovaAgendaPageModule {}
