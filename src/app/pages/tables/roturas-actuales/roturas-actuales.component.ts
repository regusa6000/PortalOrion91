import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'ngx-roturas-actuales',
  templateUrl: './roturas-actuales.component.html',
  styleUrls: ['./roturas-actuales.component.scss']
})
export class RoturasActualesComponent implements OnInit {

  source: any
  loading = false;
  name = 'RoturasActuales.xlsx';

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
    this.toggleLoadingAnimation()
    this.authSvc.controlRoturasStockActual().subscribe(data=>{
      this.source = data
    })
  }

  toggleLoadingAnimation() {
    this.loading = true;
    setTimeout(() => this.loading = false, 5000);
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
      id_product: {
        title: 'Product Id',
        type: 'number',
      },
      imagen: {
        title: 'Imagen',
        type: 'html',
        valuePrepareFunction: (value) =>{
          return "<img src='"+ value + "'>"
        }
      },
      ean13: {
        title: 'Ean13',
        type: 'number',
      },
      producto: {
        title: 'Producto',
        type: 'string',
      },
      atributo:{
        title: 'Atributo',
        type: 'string'
      },
      valor_att:{
        title: 'Valor Atributo',
        type: 'string'
      },
      stock:{
        title: 'Stock actual',
        type: 'number'
      },
      ud_30_dias:{
        title: 'Uds. 30 días:',
        type: 'number'
      },
      ud_60_dias:{
        title: 'Uds. 60 días:',
        type: 'number'
      },
      ud_90_dias:{
        title: 'Uds. 90 días:',
        type: 'number'
      },
      ud_180_dias:{
        title: 'Uds. 180 días:',
        type: 'number'
      },
      ud_1_year:{
        title: 'Uds. 1 año:',
        type: 'number'
      },
      ud_2_year:{
        title: 'Uds. 2 años:',
        type: 'number'
      },
      ud_3_year:{
        title: 'Uds. 3 años:',
        type: 'number'
      }
    },
  };

}
