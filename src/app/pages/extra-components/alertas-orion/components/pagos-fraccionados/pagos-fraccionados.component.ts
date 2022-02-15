import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../auth/auth.service';

@Component({
  selector: 'ngx-pagos-fraccionados',
  templateUrl: './pagos-fraccionados.component.html',
  styleUrls: ['./pagos-fraccionados.component.scss']
})
export class PagosFraccionadosComponent implements OnInit {

  arrayPagos: any

  constructor(public authSvc: AuthService) {
    this.refrescarTabla();
    setInterval(() => { this.refrescarTabla(); }, 10000);
   }

  ngOnInit(): void {
  }

  refrescarTabla(){
    this.authSvc.pedidosPagosFraccionados().subscribe(data=>{
      this.arrayPagos = data
    })
  }

}
