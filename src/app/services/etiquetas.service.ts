import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EtiquetaModel } from 'src/app/models/etiqueta';
import { ConstantsService } from '../services/constants.service';

@Injectable({
  providedIn: 'root'
})
export class EtiquetasService {

  baseAppUrl: string;

  constructor( private http: HttpClient, private _constant: ConstantsService) {

    this.baseAppUrl = this._constant.baseAppUrl;	

  }
  crearEtiqueta( etiqueta:EtiquetaModel, idGrafica:string ){

    return this.http.post(`${this.baseAppUrl}/edit-dashboard/etiqueta/${idGrafica}`, etiqueta);

  }
  
}
