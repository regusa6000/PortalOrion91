import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'ngx-diferencia-de-pago',
  templateUrl: './diferencia-de-pago.component.html',
  styleUrls: ['./diferencia-de-pago.component.scss']
})
export class DiferenciaDePagoComponent implements OnInit {

  source: any;

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
    this.authSvc.cargarTablaPedidosPagados().subscribe(data=>{
      this.source = data
    })
  }

  config = {
    actions: false,
    columns:{
      id_order:{
        title:'IdOrder',
        type: 'number'
      },
      total_paid:{
        title: 'Total Pagado',
        type: 'number'
      },
      amount:{
        title: 'Monto',
        type: 'number'
      },
      diferencia:{
        title: 'Diferencia',
        type: 'number'
      },
      reference:{
        title: 'Referencia',
        type: 'number'
      },
      payment:{
        title: 'Pago',
        type: 'string'
      },
      date_add:{
        title: 'Fecha',
        type: 'string'
      }
    }
  }

}
