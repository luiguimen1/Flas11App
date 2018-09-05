import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusperPage } from './busper';

@NgModule({
  declarations: [
    BusperPage,
  ],
  imports: [
    IonicPageModule.forChild(BusperPage),
  ],
})
export class BusperPageModule {}
