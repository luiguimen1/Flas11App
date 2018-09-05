import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {ConectarProvider} from '../../providers/conectar/conectar';
import {PerperPage} from '../perper/perper';

/**
 * Generated class for the BusperPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-busper',
    templateUrl: 'busper.html',
})
export class BusperPage {
    item = 1;
    criterio = "";
    edificio;

    error;

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        public toastCtrl: ToastController,
        private conecta: ConectarProvider) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad BusperPage');
    }

    presentToast(Mensaje: string) {
        const toast = this.toastCtrl.create({
            message: Mensaje,
            position: 'middle',
            showCloseButton: true,
            closeButtonText: 'Ok',
            duration: 2000
        });
        toast.present();
    }

    buscar() {
        if (this.item != 1 && this.criterio == "") {
            this.presentToast("El criterio no puede estar Solo");
        } else {
            let busqueda = {item: this.item, criterio: this.criterio};
            this.error = JSON.stringify(busqueda);
            let estado = this.conecta.servidorBuscar(busqueda);
            estado.subscribe(data => {
                this.error = JSON.stringify(data);
                //   let datos: any = data;
                //   this.edificio = datos.result;
                this.cargarVista(data);
            }, err => {
                this.verError(err);
            });
        }
    }

    verError(err) {
        this.error = JSON.stringify(err);
    }

    verifique() {
        this.criterio = '';
        this.presentToast("Cambio el criterio de busqueda.!!");
    }


    cargarVista(data:any) {
        this.edificio = data.result;
    }

    verPerfil(persona) {
        this.navCtrl.push(PerperPage, {per: persona})
    }

}
