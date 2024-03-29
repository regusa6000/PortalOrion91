import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import * as moment from 'moment';
import * as XLSX from 'xlsx';



@Component({
  selector: 'ngx-abonos-canales',
  templateUrl: './abonos-canales.component.html',
  styleUrls: ['./abonos-canales.component.scss']
})
export class AbonosCanalesComponent implements OnInit {

  fechaInicio: any
  fechaFin: any
  datosGrafico: any
  loading = false;

  name = 'AbonosCanales.xlsx';

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
  }

  buscar(){
    let json = {'fechaInicio': this.fechaInicio, 'fechaFin': this.fechaFin}

    this.toggleLoadingAnimation()
    this.authSvc.graficoAbonosCanales(json).subscribe(data=>{
      this.datosGrafico = data
      console.log(this.datosGrafico)
    })
  }

  cambioRango(event){
    if (event.start) this.fechaInicio = moment(event.start).format('YYYY-MM-DD');
    if (event.end) this.fechaFin = moment(event.end).format('YYYY-MM-DD');
    console.log(this.fechaInicio)
    console.log(this.fechaFin)
  }

  toggleLoadingAnimation() {
    this.loading = true;
    setTimeout(() => this.loading = false, 6000);
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
      canal: {
        title: 'Tienda',
        type: 'number',
      },
      abonos: {
        title: 'Total Abonos',
        type: 'number',
        valuePrepareFunction: (value) =>{
          return Intl.NumberFormat('de-DE',{style:'currency',currency: 'EUR'}).format(value)
        }
      },
      facturas: {
        title: 'Total Facturas',
        type: 'number',
        valuePrepareFunction: (value) =>{
          return Intl.NumberFormat('de-DE',{style:'currency',currency: 'EUR'}).format(value)
        }
      },
      porcentajeAbonos:{
        title: 'Porcentaje Abonados',
        type: 'number',
        valuePrepareFunction: (value) =>{
          return value + '%'
        }
      }
    },
  };


}
