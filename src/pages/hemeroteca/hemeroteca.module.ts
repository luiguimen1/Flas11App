import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HemerotecaPage } from './hemeroteca';

@NgModule({
  declarations: [
    HemerotecaPage,
  ],
  imports: [
    IonicPageModule.forChild(HemerotecaPage),
  ],
})
export class HemerotecaPageModule {}
