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
  ean13: any
  pendientesAx: any
  pedidosPendienteValidacion: any
  pedidosNoEnviados: any
  preciosDistintosCombinados: any
  precioBaseMenorPrecioOferta: any
  pedidosDuplicados: any
  productosCategorizadosOulet: any
  productosSinCategoriaPredeterminada: any

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
    this.authSvc.countProductosSinEan13().subscribe(data=>{
      this.ean13 = data
    })

    //Pendientes Ax
    let jsonToken  = {
      'email': 'rgutierrez@hidalgosgroup.com',
      'password': 'Orion2021'
    }

    this.authSvc.cargarToken(jsonToken).subscribe(data=>{
      let token = data['details'].access_token

      let jsontTok = {'token': token}

      this.authSvc.pedidosPendientesAx(jsontTok).subscribe(data=>{
        this.pendientesAx = data['details'].listado.length
      })
    })

    this.authSvc.badgePedidosPendienteValidacion().subscribe(data=>{
      this.pedidosPendienteValidacion = data
    })

    this.authSvc.badgePedidosNoEnviados().subscribe(data=>{
      this.pedidosNoEnviados = data
    })

    this.authSvc.badgeProductosDiferenciaPreciosCombinados().subscribe(data=>{
      this.preciosDistintosCombinados = data
    })
    this.authSvc.countPrecioBaseMenorPrecioOferta().subscribe(data=>{
      this.precioBaseMenorPrecioOferta = data
    })
    this.authSvc.badgePedidosDuplicados().subscribe(data=>{
      this.pedidosDuplicados = data
    })
    this.authSvc.countProductosCategorizadosOulet().subscribe(data=>{
      this.productosCategorizadosOulet = data
    })
    this.authSvc.countProductosSinCategoriaPredeterminada().subscribe(data=>{
      this.productosSinCategoriaPredeterminada = data
    })

  }

}
