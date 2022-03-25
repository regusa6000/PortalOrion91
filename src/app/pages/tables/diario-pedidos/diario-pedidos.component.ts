import { Component, OnInit } from '@angular/core';
import { spawn } from 'child_process';
import { AuthService } from '../../../auth/auth.service';
import * as eva from 'eva-icons';

@Component({
  selector: 'ngx-diario-pedidos',
  templateUrl: './diario-pedidos.component.html',
  styleUrls: ['./diario-pedidos.component.scss']
})
export class DiarioPedidosComponent implements OnInit {

  source: any;
  loading = false;
  domSanitizer: any;

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
    this.toggleLoadingAnimation()
    this.authSvc.ventasSemanales().subscribe(data=>{
      this.source = data
    })
  }

  toggleLoadingAnimation() {
    this.loading = true;
    setTimeout(() => this.loading = false, 25000);
  }

  config = {
    pager: { display: false },
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
      dia_SEMANA:{
        title: 'Dia Semana',
        type: 'string'
      },
      tot_ped: {
        title: 'Total Pedidos',
        type: 'number',
      },
      porcentaje:{
        title: 'Total con IVA -7 dias',
        type: 'html',
        valuePrepareFunction: (value: number) =>{
          if(value < 0){
            return '<div class="caja"><img src= "../../../../assets/images/abajo.png" class="imagen"><span class="rojo">' + value + '%</span></div>';
            // return '<div class="caja"><img src= "/orion/assets/images/abajo.png" class="imagen"><span class="rojo">' + value + '%</span></div>';

          }else{
            return '<div class="caja"><img src= "../../../../assets/images/arriba.png" class="imagen"><span class="verde">' + value + '%</span></div>';
            // return '<div class="caja"><img src= "/orion/assets/images/arriba.png" class="imagen"><span class="verde">' + value + '%</span></div>';
          }

        }
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
      ORION91:{
        title: 'Total Pedidos Orion91',
        type: 'number'
      },
      ORION91_SUM:{
          title: 'Total Orion91',
          type: 'number'
      },
      MEDIAORION91:{
        title: 'Media Orion91',
        type: 'number'
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
