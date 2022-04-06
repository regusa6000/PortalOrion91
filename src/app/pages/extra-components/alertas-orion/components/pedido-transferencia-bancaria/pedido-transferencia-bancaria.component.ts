import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../auth/auth.service';

@Component({
  selector: 'ngx-pedido-transferencia-bancaria',
  templateUrl: './pedido-transferencia-bancaria.component.html',
  styleUrls: ['./pedido-transferencia-bancaria.component.scss']
})
export class PedidoTransferenciaBancariaComponent implements OnInit {

  pedidos: any

  constructor(public authSvc: AuthService) {
    this.refrescarTabla();
    setInterval(() => { this.refrescarTabla(); }, 300000);
  }

  ngOnInit(): void {
  }

  refrescarTabla(){
    this.authSvc.transferenciaBancariaSinStock().subscribe(data=>{
      this.pedidos = data
    })
  }

}
