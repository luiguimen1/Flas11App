import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoadingController} from 'ionic-angular';
import {ConectarProvider} from '../../providers/conectar/conectar';
import {AlertController} from 'ionic-angular';

/**
 * Generated class for the RegperPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-regper',
    templateUrl: 'regper.html',
})
export class RegperPage {

    miventana: any;

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        private CosValFor: FormBuilder,
        private VentanaEspera: LoadingController,
        private conecta: ConectarProvider,
        private alertCtrl: AlertController) {
        this.iniciarFormulario();
    }

    RegPersona: FormGroup;

    iniciarFormulario() {
        this.RegPersona = this.CosValFor.group({
            fecNac: ['', [Validators.required]],
            tipo: ['', [Validators.required]],
            numero: ['', [Validators.required, Validators.pattern(/^[0-9]{5,20}$/)]],
            nombre: ['', [Validators.required, Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚÜñÑ ]{2,30}$/)]],
            apellido: ['', [Validators.required, Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚÜñÑ ]{2,30}$/)]],
            tele: ['', [Validators.required, Validators.pattern(/^[+0-9]{7,15}$/)]],
            email: ['', [Validators.required, Validators.email, Validators.maxLength(30)]]
        });
    }

    regper() {
        this.miventana = this.VentanaEspera.create({
            content: "Un momento...<br>Se esta procesando su solicitud"
        });
        this.miventana.present();
        let estado = this.conecta.enviarAlServidor(this.RegPersona.value);
        //avenida carac 13 - 80 salon aviente 1103
        estado.subscribe(data => {
            let res:any = data;
            this.miventana.dismiss();
            if(res.success=="ok"){
                 this.presentAlert("Positivo","El usuario fue registrado perfectamente.");
                 this.iniciarFormulario();
            }else{
                this.presentAlert("Error #7","El el sistema la CC ya esta registrada.");
            }
        },
            err => {
                this.miventana.dismiss();
                this.presentAlert("Error #6","No existe conexión con el servidor.");
            });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad RegperPage');
    }

    presentAlert(estTitu, estMensaje) {
        let alert = this.alertCtrl.create({
            title: estTitu,
            subTitle: estMensaje,
            buttons: ['Cerrar']
        });
        alert.present();
    }

}
