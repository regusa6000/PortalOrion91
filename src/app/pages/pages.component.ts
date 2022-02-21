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

  constructor(private authSvc: AuthService) {
    this.refrescarAlertas();
    //Cada 10 segundos lanza la consulta para poder tenerlo siempre actualizada
    setInterval(() => { this.refrescarAlertas(); }, 100000);
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

      })

    })

  }

}

