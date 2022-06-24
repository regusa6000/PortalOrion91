import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import * as moment from 'moment';

@Component({
  selector: 'ngx-abonos-productos',
  templateUrl: './abonos-productos.component.html',
  styleUrls: ['./abonos-productos.component.scss']
})
export class AbonosProductosComponent implements OnInit {

  source: any
  fechaInicio: any
  fechaFin: any

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
  }

  buscar(){
    let json = {'fechaInicio': this.fechaInicio, 'fechaFin': this.fechaFin}
    this.authSvc.abonosProductosEntreFechas(json).subscribe(data=>{
      this.source = data
      console.log(this.source)
    })
  }

  cambioRango(event){
    if (event.start) this.fechaInicio = moment(event.start).format('YYYY-MM-DD');
    if (event.end) this.fechaFin = moment(event.end).format('YYYY-MM-DD');
    console.log(this.fechaInicio)
    console.log(this.fechaFin)
  }

  config = {
    pager: { display: false },
    actions: false,
    columns: {
      itemid: {
        title: 'Id Ax',
        type: 'string',
      },
      name: {
        title: 'Productos',
        type: 'string',
      },
      facturas: {
        title: 'Total Facturas',
        type: 'number',
        valuePrepareFunction: (value) =>{
          return Intl.NumberFormat('de-DE',{style:'currency',currency: 'EUR'}).format(value)
        }
      },
      abonos: {
        title: 'Total Abonos',
        type: 'number',
        valuePrepareFunction: (value) =>{
          return Intl.NumberFormat('de-DE',{style:'currency',currency: 'EUR'}).format(value)
        }
      },
      porcentajeAbonos:{
        title: 'Porcentaje Abonos',
        type: 'number',
        valuePrepareFunction: (value) =>{
          return value + '%'
        }
      },
      incidencias: {
        title: 'Total Incidencias',
        type: 'number',
        valuePrepareFunction: (value) =>{
          return Intl.NumberFormat('de-DE',{style:'currency',currency: 'EUR'}).format(value)
        }
      },
      porcentajeIncis:{
        title: 'Porcentaje Incidencias',
        type: 'number',
        valuePrepareFunction: (value) =>{
          return value + '%'
        }
      }
    },
  };

}