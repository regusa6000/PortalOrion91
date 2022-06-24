import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import * as moment from 'moment';

@Component({
  selector: 'ngx-abonos-incidencias-motivos',
  templateUrl: './abonos-incidencias-motivos.component.html',
  styleUrls: ['./abonos-incidencias-motivos.component.scss']
})
export class AbonosIncidenciasMotivosComponent implements OnInit {

  fechaInicio: any
  fechaFin: any
  source: any

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
  }

  cambioRango(event){
    if (event.start) this.fechaInicio = moment(event.start).format('YYYY-MM-DD');
    if (event.end) this.fechaFin = moment(event.end).format('YYYY-MM-DD');
    console.log(this.fechaInicio)
    console.log(this.fechaFin)
  }

  buscar(){
    let json = {'fechaInicio': this.fechaInicio, 'fechaFin': this.fechaFin}
    this.authSvc.listadoAbonosIncidenciasMotivos(json).subscribe(data=>{
      this.source = data
      console.log(this.source)
    })
  }

  config = {
    pager: { display: false },
    actions: false,
    columns: {
      motivo: {
        title: 'Motivo',
        type: 'string'
      },
      submotivo: {
        title: 'subMotivo',
        type: 'string',
      },
      precioFinal:{
        title: 'Precio Final',
        type: 'number',
        valuePrepareFunction: (value) =>{
          return Intl.NumberFormat('de-DE',{style:'currency',currency: 'EUR'}).format(value)
        }
      },
      cantidadVendida:{
        title: 'Cantidad Vendida',
        type: 'string'
      }
    },
  };

}
