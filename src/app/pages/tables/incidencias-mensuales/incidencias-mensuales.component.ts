import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'ngx-incidencias-mensuales',
  templateUrl: './incidencias-mensuales.component.html',
  styleUrls: ['./incidencias-mensuales.component.scss']
})
export class IncidenciasMensualesComponent implements OnInit {

  source: any;
  loading = false;

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
    this.toggleLoadingAnimation()
    this.authSvc.incidenciasMensuales().subscribe(data=>{
      this.source = data
    })
  }

  toggleLoadingAnimation() {
    this.loading = true;
    setTimeout(() => this.loading = false, 5000);
  }

  config = {
    actions: false,
    columns: {
      productId: {
        title: 'IdProducto',
        type: 'number',
      },
      name: {
        title: 'Producto',
        type: 'string',
      },
      incidencias: {
        title: 'Cantidad Incidencias',
        type: 'number',
      },
      totalIncidencias:{
        title: 'Importe Incidencias',
        type: 'number'
      },
      porcentajeIncidencias: {
        title: 'Índice sobre venta',
        type: 'number',
      },
      ventas: {
        title: 'Cantidad Vendidas',
        type: 'number',
      },
      totalVentas:{
        title: 'Importe Ventas',
        type: 'number'
      }
    },
  };

}
