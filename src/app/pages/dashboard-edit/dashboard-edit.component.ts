import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GraficaModel } from '../../models/grafica';
import { EtiquetaModel } from '../../models/etiqueta';
import { DatosEtiquetaModel } from '../../models/datosEtiqueta';

import { ConstantsService} from '../../services/constants.service';
import { GraficasService } from '../../services/graficas.service';
import { EtiquetasService } from '../../services/etiquetas.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-dashboard-edit',
  templateUrl: './dashboard-edit.component.html',
  styleUrls: ['./dashboard-edit.component.css']
})

export class DashboardEditComponent implements OnInit {
  
  graficaModel:GraficaModel = new GraficaModel();
  etiquetaModel:EtiquetaModel = new EtiquetaModel();
  datosEtiquetaModel:DatosEtiquetaModel = new DatosEtiquetaModel();

  disabledTab: boolean = true; //siempre true
  idGrafica: string = null;

 
  constructor(private _constant: ConstantsService, private graficaService: GraficasService, private etiquetasService: EtiquetasService) {

    this.graficaModel.Usuario_idUsuario =  this._constant.idUsario;

  }
  

  ngOnInit(): void {
  }


  crearGrafica(){
    
    let peticion: Observable<any>;

    peticion = this.graficaService.crearGrafica(this.graficaModel);

    peticion.subscribe( resp => {
      

      if(resp.error){
        this._constant.ToastTimer.fire({
          icon: 'error',
          title: "Sucedió un error, vuelve a intentarlo."
        })
        // Para QA
        // console.error(resp.message);
      }else{
        
        this.disabledTab = false;
        this.idGrafica = resp.idGrafica;

        this._constant.ToastTimer.fire({
          icon: 'success',
          title: resp.message
        })
      }
      

    })

  }

  crearEtiqueta(){
  
    let peticion: Observable<any>;

    this.etiquetaModel.datos = JSON.stringify(this.datosEtiquetaModel);
    
    peticion = this.etiquetasService.crearEtiqueta(this.etiquetaModel,this.idGrafica);

    peticion.subscribe( resp => {
      
      if(resp.error){
        this._constant.ToastTimer.fire({
          icon: 'error',
          title: "Sucedió un error, vuelve a intentarlo."
        })
        // Para QA
        // console.error(resp.message);
      }else{
        
        this._constant.ToastTimer.fire({
          icon: 'success',
          title: resp.message
        })
      }
    })
  }
  

}
