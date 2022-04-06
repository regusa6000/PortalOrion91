import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'ngx-alertas-orion',
  templateUrl: './alertas-orion.component.html',
  styleUrls: ['./alertas-orion.component.scss']
})
export class AlertasOrionComponent implements OnInit {

  pedidosPagados: any
  pedidosPendientes: any
  pedidosFraccionados: any
  makroSinStock: any
  erroresAli: any
  redireccionadas: any
  predeterminados: any
  manoMano: any
  elementor: any
  preciosCambiados: any
  mpAmazon: any
  preAlmacen: any
  categoriasVacias: any
  pedidosTransferencia: any

  constructor(private authSvc: AuthService) {
    this.refrescarAlertas();
    setInterval(() => { this.refrescarAlertas(); }, 300000);
  }

  ngOnInit(): void {
  }

  refrescarAlertas(){

    this.authSvc.controlPedidosPagadosBadge().subscribe(data=>{
      this.pedidosPagados = data
    })
    this.authSvc.controlPedidosAlmacen().subscribe(data=>{
      this.pedidosPendientes = data
    })
    this.authSvc.badgePedidosFraccionados().subscribe(data=>{
      this.pedidosFraccionados = data
    })
    this.authSvc.badgePedidosSinStockMakro().subscribe(data=>{
      this.makroSinStock = data
    })
    this.authSvc.badgeAliexpress().subscribe(data=>{
      this.erroresAli = data
    })
    this.authSvc.badgeCategoriasRedireccionadas().subscribe(data=>{
      this.redireccionadas = data
    })
    this.authSvc.countDeCombinadosPredeterminadosSinStock().subscribe(data=>{
      this.predeterminados = data
    })
    this.authSvc.badgePreciosCambiados().subscribe(data=>{
      this.preciosCambiados = data
    })
    this.authSvc.countAlertasAmazon().subscribe(data=>{
      this.mpAmazon = data
    })
    this.authSvc.countPreAlmacen().subscribe(data=>{
      this.preAlmacen = data
    })
    this.authSvc.badgeCategoriasVacias().subscribe(data=>{
      this.categoriasVacias = data
    })
    this.authSvc.badgeTransferenciaBancariaSinStock().subscribe(data=>{
      this.pedidosTransferencia = data
    })

  }

}
