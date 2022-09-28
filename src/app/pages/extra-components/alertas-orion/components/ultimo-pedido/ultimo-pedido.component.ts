import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../auth/auth.service';

@Component({
  selector: 'ngx-ultimo-pedido',
  templateUrl: './ultimo-pedido.component.html',
  styleUrls: ['./ultimo-pedido.component.scss']
})
export class UltimoPedidoComponent implements OnInit {

  idOrder: any
  idOrderAx: any
  sendOk: any
  dateAdd: any
  diferenciaDeHoras: any
  alerta: any

  constructor(public authSvc: AuthService) {
    this.refrescarTabla();
    setInterval(() => { this.refrescarTabla(); }, 300000);
   }

  ngOnInit(): void {
  }

  refrescarTabla(){
    this.authSvc.ultimoPedido2Horas().subscribe(data=>{
      this.idOrder = data[0].id_order
      this.idOrderAx = data[0].id_order_ax
      this.sendOk = data[0].send_ok
      this.dateAdd = data[0].date_add
      this.diferenciaDeHoras = data[0].diferencia_horas
      this.alerta = data[0].alertar
    })
  }

}
