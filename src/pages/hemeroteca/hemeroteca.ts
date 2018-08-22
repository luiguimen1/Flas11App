import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the HemerotecaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-hemeroteca',
    templateUrl: 'hemeroteca.html',
})
export class HemerotecaPage {
    numero1;
    numero2;
    resultado;

    constructor(public navCtrl: NavController, public navParams: NavParams) {

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad HemerotecaPage');
    }


    suma() {
        this.resultado = "la suma de " + this.numero1 + " + " + this.numero2 + " = " + (parseFloat(this.numero1) + parseFloat(this.numero2));
    }

    Resta() {
        this.resultado = "la resta de " + this.numero1 + " - " + this.numero2 + " = " + (parseFloat(this.numero1) - parseFloat(this.numero2));
    }

    Multi() {
        this.resultado = "la Multi de " + this.numero1 + " * " + this.numero2 + " = " + (parseFloat(this.numero1) * parseFloat(this.numero2));
    }

    Divi() {
        this.resultado = "la Divi de " + this.numero1 + " / " + this.numero2 + " = " + (parseFloat(this.numero1) / parseFloat(this.numero2));
    }
    edificio;
    tabla() {
        this.edificio = Array();
        for (let i = 1; i < 10; i++) {
            this.edificio.push({num: this.numero1, ind: i, res: (this.numero1 * i)});
        }
    }

}
