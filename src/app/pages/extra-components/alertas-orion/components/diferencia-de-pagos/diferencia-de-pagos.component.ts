import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../auth/auth.service';

@Component({
  selector: 'ngx-diferencia-de-pagos',
  templateUrl: './diferencia-de-pagos.component.html',
  styleUrls: ['./diferencia-de-pagos.component.scss']
})
export class DiferenciaDePagosComponent implements OnInit {

  arrayDiferenciaPagos: any

  constructor(public authSvc: AuthService) {
    this.refrescarTabla();
    setInterval(() => { this.refrescarTabla(); }, 10000);
  }

  ngOnInit(): void {
  }

  refrescarTabla(){
    this.authSvc.cargarTablaPedidosPagados().subscribe(data=>{
      this.arrayDiferenciaPagos = data
    })
  }

}
