import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'ngx-productos-sin-bullets',
  templateUrl: './productos-sin-bullets.component.html',
  styleUrls: ['./productos-sin-bullets.component.scss']
})
export class ProductosSinBulletsComponent implements OnInit {

  source: any
  name = 'ProductosSinBullets.xlsx';

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
    this.authSvc.productosSinBullets().subscribe(data=>{
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
        title: 'Id Producto',
        type: 'string'
      },
      itemid: {
        title: 'Id Ax',
        type: 'string'
      },
      ean: {
        title: 'Ean13',
        type: 'string',
      },
      name_es:{
        title: 'Producto',
        type: 'string'
      },
      active:{
        title: 'Activo',
        type: 'number'
      },
      stock:{
        title: 'Stock',
        type: 'number'
      },
      bullet_1:{
        title: 'Bullet 1',
        type: 'string'
      },
      bullet_2:{
        title: 'Bullet 2',
        type: 'string'
      },
      bullet_3:{
        title: 'Bullet 3',
        type: 'string'
      }
    },
  };

}
