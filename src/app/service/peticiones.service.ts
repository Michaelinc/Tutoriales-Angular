import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse, HttpHeaders} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
  })
export class PeticionesService{
    private url:string;

    constructor(private _http:HttpClient){
        this.url = "https://jsonplaceholder.typicode.com/posts";
    }

    getPrueba(){
        return 'Hola mundo desde el servicio';
    }
    
    getArticulos(){
       return this._http.get(this.url);
    }
}