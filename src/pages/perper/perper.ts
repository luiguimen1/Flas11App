import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera';
import {ActperPage} from '../actper/actper';

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
        private camera: Camera) {
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
            allowEdit:true,
            encodingType:0,
            quality: this.calidad,
            mediaType:0,
            correctOrientation:true,
            saveToPhotoAlbum:true
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
            sourceType:0,
            targetWidth: 500,
            targetHeight: 500,
            allowEdit:true,
            mediaType:0,
            correctOrientation:true,
            saveToPhotoAlbum:true,
            encodingType:0
        }
        this.camera.getPicture(options)
            .then(imageData => {
                this.imageURI = imageData;
            })
            .catch(error => {
                console.error(error);
            });
    }
    
    irActuPer(){
        this.navCtrl.push(ActperPage, {per: this.persona});
    }

}
