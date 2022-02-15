import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'ngx-pendientes-almacen',
  templateUrl: './pendientes-almacen.component.html',
  styleUrls: ['./pendientes-almacen.component.scss']
})
export class PendientesAlmacenComponent implements OnInit {

  source: any;

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
    this.authSvc.cargarTablaPedidosAlmacen().subscribe(data=>{
      this.source = data
    })
  }

  config = {
    actions: false,
    columns: {
      id_order: {
        title: 'IdOrder',
        type: 'number',
      },
      reference: {
        title: 'Referencia',
        type: 'number',
      },
      url: {
        title: 'Redirección PS',
        type: 'string',
        valuePrepareFunction: (value) => {
          return "<a href='"+ value +"'>"+ value +"</a>";
        }
      },
      payment: {
        title: 'Metodo de Pago',
        type: 'string',
      },
      date_add: {
        title: 'Fecha',
        type: 'string',
      },
    }
  }
}
