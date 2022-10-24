import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import * as moment from 'moment';
import * as XLSX from 'xlsx';

@Component({
  selector: 'ngx-abonos-informe',
  templateUrl: './abonos-informe.component.html',
  styleUrls: ['./abonos-informe.component.scss']
})
export class AbonosInformeComponent implements OnInit {

  source: any
  fechaInicio: any
  fechaFin: any

  name = 'AbonosInforme.xlsx';

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
  }

  buscar(){
    let json = {'fechaInicio': this.fechaInicio, 'fechaFin': this.fechaFin}
    this.authSvc.informeAbonosEntreFechas(json).subscribe(data=>{
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
      referenciaPs: {
        title: 'Id Orden',
        type: 'string',
      },
      pedidoAx: {
        title: 'Pedido Ax',
        type: 'string',
      },
      abonoAX: {
        title: 'Abono Ax',
        type: 'string',
      },
      idProPS: {
        title: 'Id Producto PS',
        type: 'string'
      },
      itemID:{
        title: 'Id Producto Ax',
        type: 'string'
      },
      nombreProducto: {
        title: 'Producto',
        type: 'string'
      },
      cantidadVendida:{
        title: 'Cantidad Vendida',
        type: 'number'
      },
      precioFinal: {
        title: 'Precio Final',
        type: 'number',
        valuePrepareFunction: (value) =>{
          return Intl.NumberFormat('de-DE',{style:'currency',currency: 'EUR'}).format(value)
        }
      },
      motivo :{
        title: 'Motivo',
        type: 'string'
      },
      submotivo :{
        title: 'Sub Motivo',
        type: 'string'
      },
      fechaAbono :{
        title: 'Fecha Abono',
        type: 'string'
      }
    },
  };


}
