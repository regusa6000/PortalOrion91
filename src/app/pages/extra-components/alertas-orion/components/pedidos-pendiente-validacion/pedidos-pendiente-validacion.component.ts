import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../auth/auth.service';

@Component({
  selector: 'ngx-pedidos-pendiente-validacion',
  templateUrl: './pedidos-pendiente-validacion.component.html',
  styleUrls: ['./pedidos-pendiente-validacion.component.scss']
})
export class PedidosPendienteValidacionComponent implements OnInit {

  source: any

  constructor(public authSvc: AuthService) {
    this.refrescarTabla();
    setInterval(() => { this.refrescarTabla(); }, 300000);
   }

  ngOnInit(): void {
  }

  refrescarTabla(){
    this.authSvc.pedidosPendienteValidacion().subscribe(data=>{
      this.source = data
    })
  }

}
