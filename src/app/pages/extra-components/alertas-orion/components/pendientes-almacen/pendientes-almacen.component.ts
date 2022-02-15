import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../auth/auth.service';

@Component({
  selector: 'ngx-pendientes-almacen',
  templateUrl: './pendientes-almacen.component.html',
  styleUrls: ['./pendientes-almacen.component.scss']
})
export class PendientesAlmacenComponent implements OnInit {

  arrayPendientesAlmacen: any

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
    this.authSvc.cargarTablaPedidosAlmacen().subscribe(data=>{
      this.arrayPendientesAlmacen = data
    })
  }

}
