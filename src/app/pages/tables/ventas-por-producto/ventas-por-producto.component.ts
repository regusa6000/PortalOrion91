import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'ngx-ventas-por-producto',
  templateUrl: './ventas-por-producto.component.html',
  styleUrls: ['./ventas-por-producto.component.scss']
})
export class VentasPorProductoComponent implements OnInit {

  source: any
  idProducto: any

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
  }

  buscarPedidos(){
    let json = {'idProducto': this.idProducto}

    this.authSvc.ventasPedidosProductos(json).subscribe(data=>{
      this.source = data
    })
  }


  config = {
    actions: false,
    columns: {
      reference: {
        title: 'Referencia',
        type: 'string',
      },
      producto: {
        title: 'Producto',
        type: 'string',
      },
      name: {
        title: 'Valor Atributo',
        type: 'string',
      },
      udsPedidas:{
        title: 'Unidades Vendidas',
        type: 'number'
      },
      payment: {
        title: 'Canal',
        type: 'string',
      },
      total: {
        title: 'Total',
        type: 'number',
        valuePrepareFunction: (value) =>{
          return Intl.NumberFormat('de-DE',{style:'currency',currency: 'EUR'}).format(value)
        }
      },
      date_add:{
        title: 'Fecha Compra',
        type: 'string'
      },
    },
  };

}
