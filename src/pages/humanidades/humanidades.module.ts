import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HumanidadesPage } from './humanidades';

@NgModule({
  declarations: [
    HumanidadesPage,
  ],
  imports: [
    IonicPageModule.forChild(HumanidadesPage),
  ],
})
export class HumanidadesPageModule {}
