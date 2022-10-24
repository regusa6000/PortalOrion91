import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import * as moment from 'moment';

@Component({
  selector: 'ngx-abonos-agencia-transporte',
  templateUrl: './abonos-agencia-transporte.component.html',
  styleUrls: ['./abonos-agencia-transporte.component.scss']
})
export class AbonosAgenciaTransporteComponent implements OnInit {

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

  buscarAbonos(){
    let json = {'fechaInicio': this.fechaInicio, 'fechaFin': this.fechaFin}
    this.authSvc.abonosMotivosTransporte(json).subscribe(data=>{
      this.source = data
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
      totalSinIva:{
        title: 'Total',
        type: 'number',
        valuePrepareFunction: (value) =>{
          return Intl.NumberFormat('de-DE',{style:'currency',currency: 'EUR'}).format(value)
        }
      },
      n_abonos:{
        title: 'Número de Abonos',
        type: 'number'
      },
      agencia:{
        title: 'Agencia',
        type: 'string'
      }
    },
  };


}
