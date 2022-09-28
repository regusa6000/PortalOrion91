import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../auth/auth.service';

@Component({
  selector: 'ngx-pedidos-eliminados',
  templateUrl: './pedidos-eliminados.component.html',
  styleUrls: ['./pedidos-eliminados.component.scss']
})
export class PedidosEliminadosComponent implements OnInit {

  pedidos: any

  constructor(public authSvc: AuthService) {
    this.refrescarTabla();
    setInterval(() => { this.refrescarTabla(); }, 300000);
  }

  ngOnInit(): void {
  }

  refrescarTabla(){
    this.authSvc.pedidosEliminados().subscribe(data=>{
      this.pedidos = data
    })
  }

}
