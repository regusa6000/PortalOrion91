import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'ngx-categorias-sin-facetas',
  templateUrl: './categorias-sin-facetas.component.html',
  styleUrls: ['./categorias-sin-facetas.component.scss']
})
export class CategoriasSinFacetasComponent implements OnInit {

  source: any
  name = 'CategoriasSinFacetas.xlsx';

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
    this.authSvc.categoriasSinFacetas().subscribe(data=>{
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
      id_category: {
        title: 'Id Categoría',
        type: 'number',
      },
      name: {
        title: 'Categoría',
        type: 'string',
      },
      url: {
        title: 'Url',
        type: 'html',
        valuePrepareFunction: (value) =>{
          return "<a href='"+ value +"' target='_blank'>Ir a Categoría</a>"
        }
      },
      productosEnCategoria:{
        title: 'Productos En Categoría',
        type: 'number'
      },
      contador_facetas:{
        title: 'Contador Facetas',
        type: 'number'
      },
      elementor:{
        title: 'Elementor',
        type: 'string'
      }
    },
  };

}
