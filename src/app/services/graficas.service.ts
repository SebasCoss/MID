import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GraficaModel } from 'src/app/models/grafica';
import { ConstantsService } from '../services/constants.service';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {
  
  baseAppUrl: string;

  constructor( private http: HttpClient, private _constant: ConstantsService) {

    this.baseAppUrl = this._constant.baseAppUrl;	

  }

  crearGrafica( grafica:GraficaModel ){

    return this.http.post(`${this.baseAppUrl}/edit-dashboard/grafica`, grafica);

  }

}
