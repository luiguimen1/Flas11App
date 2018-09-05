import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the SumasepradaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-sumaseprada',
    templateUrl: 'sumaseprada.html',
})
export class SumasepradaPage {
    n1: number;
    n2: number;
    resultado: number;
    resultado2: number;
    resultado3;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.n1 = parseFloat(this.navParams.get("va1"));
        this.n2 = parseFloat(this.navParams.get("va2"));
        this.resultado = this.n1 + this.n2;
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SumasepradaPage');
        this.resultado2 = this.n1 + this.n2;
    }

    suma() {
        this.resultado3 = (this.n1 + this.n2);
    }

}
