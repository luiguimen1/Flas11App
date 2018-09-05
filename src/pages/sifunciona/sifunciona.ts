import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {SumaobjectoPage} from '../sumaobjecto/sumaobjecto';
import {SumasepradaPage} from '../sumaseprada/sumaseprada';
/**
 * Generated class for the SifuncionaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-sifunciona',
    templateUrl: 'sifunciona.html',
})
export class SifuncionaPage {

    numero1:number;
    numero2:number;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SifuncionaPage');
    }

    sumaSepa() {
        this.navCtrl.push(SumasepradaPage, {va1: this.numero1, va2: this.numero2});
    }

    sumaObjecte() {
        this.navCtrl.push(SumaobjectoPage,{todo:{va1: this.numero1, va2: this.numero2}})
    }

}
