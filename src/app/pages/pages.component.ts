import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})

export class PagesComponent implements OnInit{

  menu = MENU_ITEMS
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
    this.refrescarBadgeManoMano();
    //Cada 10 segundos lanza la consulta para poder tenerlo siempre actualizada
    setInterval(() => { this.refrescarAlertas(); }, 300000);
    setInterval(() => { this.refrescarBadgeManoMano(); }, 300000);
  }


  ngOnInit(): void{
  }

  refrescarAlertas(){

    let total = 0;

    this.authSvc.controlPedidosPagadosBadge().subscribe(data=>{
      this.pedidosPagados = data
      total += this.pedidosPagados

      this.authSvc.controlPedidosAlmacen().subscribe(data=>{
        this.pedidosPendientes = data
        total += this.pedidosPendientes

        this.authSvc.badgePedidosFraccionados().subscribe(data=>{
          this.pedidosFraccionados = data
          total += this.pedidosFraccionados

          this.authSvc.badgePedidosSinStockMakro().subscribe(data=>{
            this.makroSinStock = data
            total += this.makroSinStock

            this.authSvc.badgeAliexpress().subscribe(data=>{
              this.erroresAli = data
              total += this.erroresAli

                this.authSvc.badgeCategoriasRedireccionadas().subscribe(data=>{
                  this.redireccionadas = data
                  total += this.redireccionadas

                  this.authSvc.countDeCombinadosPredeterminadosSinStock().subscribe(data=>{
                    this.predeterminados = data
                    total += this.predeterminados

                      this.authSvc.badgePreciosCambiados().subscribe(data=>{
                        this.preciosCambiados = data
                        total += this.preciosCambiados

                        this.authSvc.countAlertasAmazon().subscribe(data=>{

                          this.mpAmazon = data
                          total += this.mpAmazon

                          this.authSvc.countPreAlmacen().subscribe(data=>{

                            this.preAlmacen = data
                            total += this.preAlmacen

                            this.authSvc.badgeCategoriasVacias().subscribe(data=>{

                              this.categoriasVacias = data
                              total += this.categoriasVacias

                              this.authSvc.badgeTransferenciaBancariaSinStock().subscribe(data=>{

                                this.pedidosTransferencia = data
                                total += this.pedidosTransferencia

                                if(total > 0){
                                  this.menu[0].badge = {
                                    text: `${total}`,
                                    status:"danger"
                                  }
                                }

                              })

                            })

                          })

                        })

                      })



                      console.log(this.menu)

                  })

                })

            })

          })

        })

      })

    })

  }

  refrescarBadgeManoMano(){

    let ManoMano = 0

    this.authSvc.controlManoManoBadge().subscribe(data=>{
      this.manoMano = data
       ManoMano = this.manoMano

      if(ManoMano > 0){
        this.menu[4].children[0].badge = {
          text: `${ManoMano}`,
          status:"danger"
        }

        this.menu[4].badge = {
          text: `${ManoMano}`,
          status:"danger"
        }

      }

      console.log(this.manoMano)

    })
  }

}

