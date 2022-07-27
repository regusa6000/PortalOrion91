import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'ngx-productos-sin-mp',
  templateUrl: './productos-sin-mp.component.html',
  styleUrls: ['./productos-sin-mp.component.scss']
})
export class ProductosSinMpComponent implements OnInit {

  source: any
  name = 'ProductosSinMp.xlsx';

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
    this.authSvc.productosSinMpNombreArticulo().subscribe(data=>{
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
      nombreProducto: {
        title: 'Producto',
        type: 'string',
      },
      stock:{
        title: 'Stock',
        type: 'number'
      },
    },
  };

}
