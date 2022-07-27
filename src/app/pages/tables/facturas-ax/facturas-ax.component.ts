import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import * as XLSX from 'xlsx';
import * as moment from 'moment';

@Component({
  selector: 'ngx-facturas-ax',
  templateUrl: './facturas-ax.component.html',
  styleUrls: ['./facturas-ax.component.scss']
})
export class FacturasAxComponent implements OnInit {

  source: any
  fechaInicio: any
  fechaFin: any
  name = 'FacturasAx.xlsx';

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
    this.authSvc.datosFacturacionAx().subscribe(data => {
      this.source = data
    })
  }

  cambioRango(event){
    if (event.start) this.fechaInicio = moment(event.start).format('YYYY-MM-DD');
    if (event.end) this.fechaFin = moment(event.end).format('YYYY-MM-DD');
    console.log(this.fechaInicio)
    console.log(this.fechaFin)
  }

  facturasAxEntreFechas(){

    let json = {'fechaInicio': this.fechaInicio, 'fechaFin': this.fechaFin}

    this.authSvc.facturasAxEntreFechas(json).subscribe(data=>{
      this.source = data
    })
  }

  exportToExcel(): void {
    let element = document.getElementById('season-tble');
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');

    XLSX.writeFile(book, this.name);
  }


  config = {
    pager: { display: false },
    actions: false,
    columns: {
      dia: {
        title: 'Día',
        type: 'string',
      },
      suma_ped: {
        title: 'Total Pedidos',
        type: 'number',
      },
      suma_incis:{
        title: 'Total Incis',
        type: 'number'
      },
      suma_abo:{
        title: 'Total Abonos',
        type: 'number'
      },
      total_ped_s_i:{
        title: 'Importe Pedidos Sin Iva',
        type: 'number',
        valuePrepareFunction: (value) =>{
          return Intl.NumberFormat('de-DE',{style:'currency',currency: 'EUR'}).format(value)
        }
      },
      total_incis_s_i:{
        title: 'Importe Incis Sin Iva',
        type: 'number',
        valuePrepareFunction: (value) =>{
          return Intl.NumberFormat('de-DE',{style:'currency',currency: 'EUR'}).format(value)
        }
      },
      total_abo_s_i:{
        title: 'Importe Abonos Sin Iva',
        type: 'number',
        valuePrepareFunction: (value) =>{
          return Intl.NumberFormat('de-DE',{style:'currency',currency: 'EUR'}).format(value)
        }
      },
    },
  };

}
