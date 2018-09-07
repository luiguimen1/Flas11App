import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController, ToastController} from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera';
import {ActperPage} from '../actper/actper';
import {ConectarProvider} from '../../providers/conectar/conectar';
import {FileTransfer, FileUploadOptions, FileTransferObject} from '@ionic-native/file-transfer';
import {LoadingController} from 'ionic-angular';

/**
 * Generated class for the PerperPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-perper',
    templateUrl: 'perper.html',
})
export class PerperPage {
    persona;
    calidad;
    imageURI;
    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        private camera: Camera,
        public alertCtrl: AlertController,
        private conecta: ConectarProvider,
        public toastCtrl: ToastController,
        private transfer: FileTransfer,
        public loadingCtrl: LoadingController) {
        this.persona = this.navParams.get("per");
        this.calidad = 50;
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad PerperPage');
    }

    cam() {
        let options: CameraOptions = {
            destinationType: this.camera.DestinationType.DATA_URL,
            targetWidth: 500,
            targetHeight: 500,
            allowEdit: true,
            encodingType: 0,
            quality: this.calidad,
            mediaType: 0,
            correctOrientation: true,
            saveToPhotoAlbum: true
        }
        this.camera.getPicture(options)
            .then(imageData => {
                this.imageURI = `data:image/jpeg;base64,${imageData}`;
            })
            .catch(error => {
                console.error(error);
            });
    }

    SD() {
        let options: CameraOptions = {
            destinationType: 1,
            sourceType: 0,
            targetWidth: 500,
            targetHeight: 500,
            allowEdit: true,
            mediaType: 0,
            correctOrientation: true,
            saveToPhotoAlbum: true,
            encodingType: 0
        }
        this.camera.getPicture(options)
            .then(imageData => {
                this.imageURI = imageData;
            })
            .catch(error => {
                console.error(error);
            });
    }

    irActuPer() {
        this.navCtrl.push(ActperPage, {per: this.persona});
    }


    showConfirm() {
        const confirm = this.alertCtrl.create({
            title: 'confirmación su solicitud?',
            message: 'Esta seguro de eliminar al usuario ' + this.persona.nombre + ' ?',
            buttons: [
                {
                    text: 'Confirmar',
                    handler: () => {
                        let estado = this.conecta.servidorDelete(this.persona);
                        estado.subscribe(data => {
                            let res: any = data;
                            if (res.success == "ok") {
                                this.navCtrl.popToRoot();
                            } else {
                                this.presentToast('NO se puede eliminar el usuario');
                            }
                        }, err => {
                            this.presentToast('Hay un problema con el servidor');
                        });
                    }
                },
                {
                    text: 'Cancelar',
                    handler: () => {

                    }
                }
            ]
        });
        confirm.present();
    }

    presentToast(men) {
        const toast = this.toastCtrl.create({
            message: men,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    }
    info;
    ruta = "http://192.168.0.141/flas011/"
    cargarFoto() {
        let loader = this.loadingCtrl.create({
            content: "<b>El archivo esta Cargado...</b>"
        });
        loader.present();
        const fileTransfer: FileTransferObject = this.transfer.create();
        var datos = {id: this.persona.id};
        let options: FileUploadOptions = {
            fileKey: 'ionicfile',
            fileName: 'ionicfile',
            chunkedMode: false,
            mimeType: "image/jpeg",
            headers: {},
            httpMethod: 'POST',
            params: datos
        }
        this.info = "Procesando";
        fileTransfer.upload(this.imageURI, this.ruta + 'Controller/SubirFoto.php', options)
            .then((data) => {
                this.actualizar(data);
                // this.info = JSON.stringify(data)+" -> Lo que llega";
                loader.dismiss();
            }, (err) => {
                console.log(err);
                loader.dismiss();
                this.info = " -> Error de Comunicación";
                // Puede Colocar una alerta de que existe un problema con el servidor
            });
    }
    actualizar(data: any) {
        if (data.response != "no") {
            this.imageURI = this.ruta + "img/" + JSON.parse(data.response).sucess;
            this.info = "La imagen fue cargada";
            // Puede Colocar una alerta de que la imagen fue cargada
        } else {
            // Puede Colocar una alerta de que la imagen NO fue cargada
            this.info = "La imagen no fue cargada";
        }
    }

}
