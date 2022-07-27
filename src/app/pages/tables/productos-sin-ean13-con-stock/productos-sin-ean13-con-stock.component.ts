import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'ngx-productos-sin-ean13-con-stock',
  templateUrl: './productos-sin-ean13-con-stock.component.html',
  styleUrls: ['./productos-sin-ean13-con-stock.component.scss']
})
export class ProductosSinEan13ConStockComponent implements OnInit {

  source: any
  name = 'ProductosSinEan13.xlsx';

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
    this.authSvc.productosSinEan13().subscribe(data=>{
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
      id_product: {
        title: 'ID Producto',
        type: 'number',
      },
      id_product_attribute: {
        title: 'ID Atributo',
        type: 'number',
      },
      id_ax: {
        title: 'ID AX',
        type: 'number',
      },
      reference:{
        title: 'Referencia',
        type: 'number'
      },
      nombreProducto: {
        title: 'Producto',
        type: 'string',
      },
      nombreAtributo: {
        title: 'Atributo',
        type: 'string',
      },
      nombreValorAtt:{
        title: 'Valor Atributo',
        type: 'string'
      },
      stock:{
        title: 'Stock',
        type: 'number'
      },
      date_add:{
        title: 'Fecha',
        type: 'string'
      }
    },
  };

}
