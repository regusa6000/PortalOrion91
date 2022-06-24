import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'ngx-buscador-de-productos',
  templateUrl: './buscador-de-productos.component.html',
  styleUrls: ['./buscador-de-productos.component.scss']
})
export class BuscadorDeProductosComponent implements OnInit {

  valor: any
  source: any

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
  }

  buscador(){
    this.authSvc.buscadorDeProductos(this.valor).subscribe(data=>{
      this.source = ''
      this.source = data
      this.valor = ''
    })
  }

  config = {
    actions: false,
    columns: {
      id_product: {
        title: 'Id Producto',
        type: 'number'
      },
      url: {
        title: 'Enlace',
        type: 'html',
        valuePrepareFunction: (value) =>{
          return "<a href='"+ value +"' target='_blank'>Enlace</a>"
        }
      },
      imagen:{
        title: 'Imagen',
        type: 'html',
        valuePrepareFunction: (value) =>{
          return "<img src='"+ value + "'>"
        }
      },
      name: {
        title: 'Producto',
        type: 'string',
      },
      reference:{
        title: 'Referencia',
        type: 'string'
      },
      atributo:{
        title: 'Atributo',
        type: 'string'
      },
      valor: {
        title: 'Valor',
        type: 'string'
      },
      ean13:{
        title: 'Ean13',
        type: 'string'
      },
      axIdSimple: {
        title: 'Id Ax Simple',
        type: 'string'
      },
      axIdCombinado: {
        title: 'Id Ax Combinado',
        type: 'string'
      }
    },
  };


}
