import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoadingController} from 'ionic-angular';
import {ConectarProvider} from '../../providers/conectar/conectar';
import {AlertController} from 'ionic-angular';

/**
 * Generated class for the ActperPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-actper',
    templateUrl: 'actper.html',
})
export class ActperPage {
    persona;

    RegPersona: FormGroup;
    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        private CosValFor: FormBuilder,
        private VentanaEspera: LoadingController,
        private conecta: ConectarProvider,
        private alertCtrl: AlertController) {

        this.persona = this.navParams.get('per');
        this.iniciarFormulario();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ActperPage');
    }

    iniciarFormulario() {
        this.RegPersona = this.CosValFor.group({
            fecNac: [this.persona.fecnac, [Validators.required]],
            tipo: [this.persona.tipo, [Validators.required]],
            numero: [this.persona.cc, [Validators.required, Validators.pattern(/^[0-9]{5,20}$/)]],
            nombre: [this.persona.nombre, [Validators.required, Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚÜñÑ ]{2,30}$/)]],
            apellido: [this.persona.apellido, [Validators.required, Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚÜñÑ ]{2,30}$/)]],
            tele: [this.persona.telefono, [Validators.required, Validators.pattern(/^[+0-9]{7,15}$/)]],
            email: [this.persona.email, [Validators.required, Validators.email, Validators.maxLength(30)]]
        });
    }

    cancelar() {
        this.navCtrl.pop();
    }

    actualizarPer() {
        const loader = this.VentanaEspera.create({
            content: "Un momento por favor.... Se esta procesando su solicitud"
        });
        loader.present();
        let perLocal = this.RegPersona.value;
        perLocal.id = this.persona.id;
        let estado = this.conecta.servidorActualizar(perLocal);

        estado.subscribe(data => {
            loader.dismiss();
            let respuesta:any = data;
            if (respuesta.success=="ok"){
                this.showAlert("Informe", "Se actualizo el registro con éxito");
            }else{
                this.showAlert("Informe", "No se actualizo el registro");
            }
            
        }, err => {
            loader.dismiss();
            this.showAlert("Error #8", "No hay conexión con el servidor");

        });
    }


    showAlert(titulo, mensaje) {
        const alert = this.alertCtrl.create({
            title: titulo,
            subTitle: mensaje,
            buttons: ['Cerrar']
        });
        alert.present();
    }


}
