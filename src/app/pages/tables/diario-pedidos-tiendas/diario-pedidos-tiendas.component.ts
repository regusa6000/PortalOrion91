import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'ngx-diario-pedidos-tiendas',
  templateUrl: './diario-pedidos-tiendas.component.html',
  styleUrls: ['./diario-pedidos-tiendas.component.scss']
})
export class DiarioPedidosTiendasComponent implements OnInit {

  source: any;
  loading = false;

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
    this.toggleLoadingAnimation()
    this.authSvc.ventasSemanalesTiendas().subscribe(data=>{
      this.source = data
    })
  }

  toggleLoadingAnimation() {
    this.loading = true;
    setTimeout(() => this.loading = false, 25000);
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
      year: {
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
        valuePrepareFunction: (value) =>{
          return value + '€'
        }
      },
      ORION91:{
        title: 'Total Pedidos Orion91',
        type: 'number'
      },
      ORION91_SUM:{
          title: 'Total Orion91',
          type: 'number',
          valuePrepareFunction: (value) =>{
            return value + '€'
          }
      },
      MANOMANO:{
        title: 'Total Pedidos ManoMano',
        type: 'number'
      },
      MANOMANO_SUM:{
        title: 'Total ManoMano',
        type: 'number',
        valuePrepareFunction: (value) =>{
          return value + '€'
        }
      },
      ALIEXPRESS:{
        title: 'Total Pedidos AliExpress',
        type: 'number'
      },
      ALIEXPRESS_SUM:{
        title: 'Total AliExpress',
        type: 'number',
        valuePrepareFunction: (value) =>{
          return value + '€'
        }
      },
      AMAZON:{
        title: 'Total Pedidos Amazon',
        type: 'number'
      },
      AMAZON_SUM:{
        title: 'Total Amazon',
        type: 'number',
        valuePrepareFunction: (value) =>{
          return value + '€'
        }
      },
      GROUPON:{
        title: 'Total Pedidos Groupon',
        type: 'number'
      },
      GROUPON_SUM:{
        title: 'Total Groupon',
        type: 'number',
        valuePrepareFunction: (value) =>{
          return value + '€'
        }
      },
      EMBARGOS:{
        title: 'Total Pedidos Embargos',
        type: 'number'
      },
      EMBARGOS_SUM:{
        title: 'Total Embargos',
        type: 'number',
        valuePrepareFunction: (value) =>{
          return value + '€'
        }
      },
      MEQUEDOUNO:{
        title: 'Total Pedidos MequedoUno',
        type: 'number'
      },
      MEQUEDOUNO_SUM:{
        title: 'Total MequedoUno',
        type: 'number',
        valuePrepareFunction: (value) =>{
          return value + '€'
        }
      },
      FNAC:{
        title: 'Total Pedidos FNAC',
        type: 'number'
      },
      FNAC_SUM: {
        title: 'Total FNAC',
        type: 'number',
        valuePrepareFunction: (value) =>{
          return value + '€'
        }
      },
      WISH:{
        title: 'Total Pedidos Wish',
        type: 'number'
      },
      WISH_SUMA: {
        title: 'Total Wish',
        type: 'number',
        valuePrepareFunction: (value) =>{
          return value + '€'
        }
      },
      CARREFOUR :{
        title: 'Total Pedidos Carrefour',
        type: 'number'
      },
      CARREFOUR_SUM:{
        title: 'Total Carrefour',
        type: 'number',
        valuePrepareFunction: (value) =>{
          return value + '€'
        }
      },
      MAKRO:{
        title: 'Total Pedidos Makro',
        type: 'number'
      },
      MAKRO_SUMA:{
        title: 'Total Makro',
        type: 'number',
        valuePrepareFunction: (value) =>{
          return value + '€'
        }
      },
      PcCOMPONENTES:{
        title: 'Total Pedidos PcComponentes',
        type: 'number'
      },
      PcCOMPOMENTES_SUMA:{
        title: 'Total PcComponentes',
        type: 'number',
        valuePrepareFunction: (value) =>{
          return value + '€'
        }
      },
      SPRINTER:{
        title: 'Total Pedidos Sprinter',
        type: 'number'
      },
      SPRINTER_SUM:{
        title: 'Total Sprinter',
        type: 'number',
        valuePrepareFunction: (value) =>{
          return value + '€'
        }
      },
      BULEVIP:{
        title: 'Total Pedidos Bulevip',
        type: 'number'
      },
      BULEVIP_SUM:{
        title: 'Total Bulevip',
        type: 'number',
        valuePrepareFunction: (value) =>{
          return value + '€'
        }
      },
      VENCA:{
        title: 'Total Pedidos Venca',
        type: 'number'
      },
      VENCA_SUM:{
        title: 'Total Venca',
        type: 'number',
        valuePrepareFunction: (value) =>{
          return value + '€'
        }
      }
    },
  };

}
