import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'ngx-pedidos-eliminados',
  templateUrl: './pedidos-eliminados.component.html',
  styleUrls: ['./pedidos-eliminados.component.scss']
})
export class PedidosEliminadosComponent implements OnInit {

  source: any

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
    this.authSvc.pedidosEliminados().subscribe(data=>{
      this.source = data
    })
  }

  config = {
    pager: { display: false },
    actions: false,
    columns: {
      inicioBrecha: {
        title: 'Inicio Brecha',
        type: 'string'
      },
      finBrecha: {
        title: 'Fin Brecha',
        type: 'string',
      },
      ultimoPedido:{
        title: 'Último Pedido',
        type: 'string'
      },
      date_add:{
        title: 'Fecha',
        type: 'string'
      }
    },
  };

}
