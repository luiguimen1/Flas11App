import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

/*
  Generated class for the ConectarProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConectarProvider {

    constructor(public http: HttpClient) {
        console.log('Hello ConectarProvider Provider');
    }

    traerListPer(numero) {
        return this.http.get("https://randomuser.me/api/?results=" + numero);
    }

    options = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    /**
     * Metodo que permite enviar datos de la creación de personas al servidor
     */
    enviarAlServidor(persona: any) {
        return this.http.post("http://192.168.0.141/flas011/controller/registro.php", JSON.stringify(persona), this.options);
    }

    servidorBuscar(criterio) {
        return this.http.post("http://192.168.0.141/flas011/controller/buscar.php", JSON.stringify(criterio), this.options);
    }

    servidorActualizar(newPersana) {
        return this.http.post("http://192.168.0.141/flas011/controller/actualizarPersona.php", JSON.stringify(newPersana), this.options);
    }


    servidorDelete(Persano: any) {
        let codigo = {id: Persano.id}
        return this.http.post("http://192.168.0.141/flas011/controller/EliminarPersona.php", JSON.stringify(codigo), this.options);
    }
}
