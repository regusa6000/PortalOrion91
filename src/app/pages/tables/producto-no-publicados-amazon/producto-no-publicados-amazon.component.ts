import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'ngx-producto-no-publicados-amazon',
  templateUrl: './producto-no-publicados-amazon.component.html',
  styleUrls: ['./producto-no-publicados-amazon.component.scss']
})
export class ProductoNoPublicadosAmazonComponent implements OnInit {

  source: any

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
    this.authSvc.productosNoPublicadosAmazon().subscribe(data=>{
      this.source = data
    })
  }

  config = {
    actions: false,
    columns: {
      id_product: {
        title: 'Id Producto',
        type: 'number'
      },
      imagen:{
        title: 'Imagen',
        type: 'html',
        valuePrepareFunction: (value) =>{
          return "<img src='"+ value + "'>"
        }
      },
      NombreProducto: {
        title: 'Producto',
        type: 'string',
      },
      NombreCategoria:{
        title: 'Categoría',
        type: 'string'
      },
      Caracteristica:{
        title: 'Caracteristica',
        type: 'string'
      },
      Valor: {
        title: 'Valor',
        type: 'string'
      },
    },
  };

}
