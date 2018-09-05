import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the SumaobjectoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-sumaobjecto',
    templateUrl: 'sumaobjecto.html',
})
export class SumaobjectoPage {
    todo: any;
    resultado: number;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.todo = this.navParams.get("todo");
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SumaobjectoPage');
        this.resultado = parseFloat(this.todo.va1) + parseFloat(this.todo.va2);
    }

}
