import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'ngx-diario-pedidos',
  templateUrl: './diario-pedidos.component.html',
  styleUrls: ['./diario-pedidos.component.scss']
})
export class DiarioPedidosComponent implements OnInit {

  source: any;
  loading = false;

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
    this.toggleLoadingAnimation()
    this.authSvc.ventasSemanales().subscribe(data=>{
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
      dia: {
        title: 'Dia',
        type: 'number',
      },
      mes: {
        title: 'Mes',
        type: 'number',
      },
      amo: {
        title: 'Año',
        type: 'number',
      },
      tot_ped: {
        title: 'Total Pedidos',
        type: 'number',
      },
      tot_sum_IVA: {
        title: 'Total Con Iva',
        type: 'number',
      },
      tot_SIN_IVA:{
        title: 'Total Sin Iva',
        type: 'number'
      },
      tot_med_carr:{
        title: 'Media',
        type: 'number'
      },
      dia_SEMANA:{
        title: 'Dia Semana',
        type: 'string'
      },
      media06:{
        title: '00-06',
        type: 'number'
      },
      media12:{
        title: '06-12',
        type: 'number'
      },
      media18:{
        title: '12-18',
        type: 'number'
      },
      media24: {
        title: '18-24',
        type: 'number'
      }
    },
  };

}
