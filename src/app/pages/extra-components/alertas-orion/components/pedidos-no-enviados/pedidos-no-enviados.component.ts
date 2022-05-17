import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../auth/auth.service';

@Component({
  selector: 'ngx-pedidos-no-enviados',
  templateUrl: './pedidos-no-enviados.component.html',
  styleUrls: ['./pedidos-no-enviados.component.scss']
})
export class PedidosNoEnviadosComponent implements OnInit {

  source: any

  constructor(public authSvc: AuthService) {
    this.refrescarTabla();
    setInterval(() => { this.refrescarTabla(); }, 300000);
  }

  ngOnInit(): void {
  }

  refrescarTabla(){
    this.authSvc.pedidosNoEnviados().subscribe(data=>{
      this.source = data
    })
  }

}
