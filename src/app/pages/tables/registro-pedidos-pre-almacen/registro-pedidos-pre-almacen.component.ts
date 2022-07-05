import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'ngx-registro-pedidos-pre-almacen',
  templateUrl: './registro-pedidos-pre-almacen.component.html',
  styleUrls: ['./registro-pedidos-pre-almacen.component.scss']
})
export class RegistroPedidosPreAlmacenComponent implements OnInit {

  source: any

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
    this.authSvc.listadoTablaPedidosPreAlmacen().subscribe(data=>{
      this.source = data
    })
  }

  config = {
    pager: { display: false },
    actions: false,
    columns: {
      reference: {
        title: 'Referencia',
        type: 'string'
      },
      payment: {
        title: 'Método de Pago',
        type: 'string',
      },
      url:{
        title: 'Enlace',
        type: 'html',
        valuePrepareFunction: (value: string) =>{
          return "<div style='text-align: center;' ><a href='" + value + "' target='_blank'>Ir a Pedido</a></div>";
        }
      },
      totalPaid:{
        title: 'Total Pagado',
        type: 'number',
        valuePrepareFunction: (value) =>{
          return Intl.NumberFormat('de-DE',{style:'currency',currency: 'EUR'}).format(value)
        }
      },
      fechaCreacionCompra:{
        title: 'Fecha Compra',
        type: 'string'
      },
      fechaRegistro:{
        title: 'Fecha Registro',
        type: 'string'
      }
    },
  };

}
