import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../auth/auth.service';

@Component({
  selector: 'ngx-pedidos-makro-sin-stock',
  templateUrl: './pedidos-makro-sin-stock.component.html',
  styleUrls: ['./pedidos-makro-sin-stock.component.scss']
})
export class PedidosMakroSinStockComponent implements OnInit {

  arrayMakro: any

  constructor(public authSvc: AuthService) {
    this.refrescarTabla();
    setInterval(() => { this.refrescarTabla(); }, 300000);
   }

  ngOnInit(): void {
  }

  refrescarTabla(){
    this.authSvc.pedidosSinStockMakro().subscribe(data=>{
      this.arrayMakro = data
    })
  }

}
