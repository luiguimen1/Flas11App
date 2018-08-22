import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HemerotecaPage} from '../hemeroteca/hemeroteca';
import {ListperPage} from '../listper/listper';
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

}
