import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';

import {SistemasPage} from '../pages/sistemas/sistemas';
import {HemerotecaPage} from '../pages/hemeroteca/hemeroteca';
import {CienciasPage} from '../pages/ciencias/ciencias';
import {HumanidadesPage} from '../pages/humanidades/humanidades';
import {ListperPage} from '../pages/listper/listper';

import {HttpClientModule} from '@angular/common/http';
import {ConectarProvider} from '../providers/conectar/conectar';

import {VerperfilPage} from '../pages/verperfil/verperfil';

import {SifuncionaPage} from '../pages/sifunciona/sifunciona';
import {SumasepradaPage} from '../pages/sumaseprada/sumaseprada';
import {SumaobjectoPage} from '../pages/sumaobjecto/sumaobjecto';


import {RegperPage} from '../pages/regper/regper';
import {BusperPage} from '../pages/busper/busper';
import {PerperPage} from '../pages/perper/perper';
import {ActperPage} from '../pages/actper/actper';

import {Camera} from '@ionic-native/camera';

import {FileTransfer, FileUploadOptions, FileTransferObject} from '@ionic-native/file-transfer';
import {File} from '@ionic-native/file';


@NgModule({
    declarations: [
        MyApp,
        HomePage,
        HemerotecaPage,
        CienciasPage,
        SistemasPage,
        HumanidadesPage,
        ListperPage,
        VerperfilPage,
        SifuncionaPage,
        SumasepradaPage,
        SumaobjectoPage,
        RegperPage,
        BusperPage,
        PerperPage,
        ActperPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        HttpClientModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        SistemasPage,
        HomePage,
        HemerotecaPage,
        CienciasPage,
        HumanidadesPage,
        ListperPage,
        VerperfilPage,
        SifuncionaPage,
        SumasepradaPage,
        SumaobjectoPage,
        RegperPage,
        BusperPage,
        PerperPage,
        ActperPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        ConectarProvider,
        Camera,
        FileTransfer,
       // FileUploadOptions,
        FileTransferObject,
        File
    ]
})
export class AppModule {}
