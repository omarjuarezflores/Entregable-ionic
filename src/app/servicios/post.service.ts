import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Cine} from "../modelos/Cine";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private cine2: Cine =  new Cine();
  constructor(
    private rest: HttpClient
  ) { }

  urlBase =  'http://localhost:9000/cine/';
   header = { headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Content-Type': 'application/json'
    }
  };

  obtenerPosts(): Observable<any>{
    return  this.rest.get(this.urlBase+'obtener',this.header).pipe( map ( res => {
      return res;
    }));
  }

obtenerPost(idCine): Observable<any>{
  return  this.rest.get(this.urlBase+'obtener/id?idCine='+idCine,this.header).pipe( map ( res => {
    return res;
  }));
}

  guadarCine(dato) {
    
    
    
    return  this.rest.post(this.urlBase+'guardar',dato,this.header).pipe( map ( res => {
      return res;
    }));
  }

  activarInactivar(idCine) {
    return  this.rest.put(this.urlBase+'activar-inactivar?idCine='+idCine,this.header).pipe( map ( res => {
      return res;
    }));
  }
}
