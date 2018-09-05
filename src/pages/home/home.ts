import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HemerotecaPage} from '../hemeroteca/hemeroteca';
import {ListperPage} from '../listper/listper';
import {SifuncionaPage} from '../sifunciona/sifunciona';
import {RegperPage} from '../regper/regper';
import {BusperPage} from '../busper/busper';


@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController) {
    }

    irHemeroteca() {
        this.navCtrl.push(HemerotecaPage);
    }
    
    IrListaPer(){
        this.navCtrl.push(ListperPage);
    }
    
    IraSifunciona(){
        this.navCtrl.push(SifuncionaPage);
    }
    
    irRegPer(){
        this.navCtrl.push(RegperPage);
    }
    
    irBusPer(){
        this.navCtrl.push(BusperPage);
    }

}
