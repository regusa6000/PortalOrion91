import { ThrowStmt } from '@angular/compiler';
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

export class PagesComponent implements OnInit {

  menu = MENU_ITEMS
  idUsuario: number
  arrayRespuestaMenu: any = []
  arrayOcultar: any = []

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
  productosSinEan13: any
  pendientesAx: any
  pedidosPendientesValidacion: any
  pedidosNoEnviados: any
  productosCombinadosDiferentes: any
  precioBaseMenorPrecioOferta: any
  pedidosDuplicados: any
  productosCategorizasdosOulet: any
  productosSinCategoriaPredeterminada: any
  productosSinMpNombreArticulo: any
  productosSinBullets: any
  categoriasSinFacetas: any

  countProductosSinEan13: any
  countProductosSinMpNombreArticulo: any
  countProductosSinBullets: any
  countCategoriasSinFacetas: any

  constructor(private authSvc: AuthService) {
    this.refrescarAlertas();
    this.refrescarBadgeManoMano();
    this.refrescarProductosSinEan13();
    this.refrescarProductosSinMp();
    this.refrescarProductosSinBullets();
    this.refrescarCategoriasSinFacetas();
    this.refrescarParentProductos();
    this.refrescarSubMenuProductos();

    //Cada 10 segundos lanza la consulta para poder tenerlo siempre actualizada
    setInterval(() => { this.refrescarAlertas(); }, 300000);
    setInterval(() => { this.refrescarBadgeManoMano(); }, 300000);
    setInterval(() => { this.refrescarProductosSinEan13(); }, 300000);
    setInterval(() => { this.refrescarProductosSinMp(); }, 300000);
    setInterval(() => { this.refrescarProductosSinBullets(); }, 300000);
    setInterval(() => { this.refrescarCategoriasSinFacetas(); }, 300000);
    setInterval(() => { this.refrescarParentProductos(); }, 300000);
    setInterval(() => { this.refrescarSubMenuProductos(); }, 300000);

    // console.log('Menu')
    // console.log(this.menu)

    // let datosUsuario = localStorage.getItem('auth_app_token')
    // let valoresUsuario = JSON.parse(datosUsuario)
    // console.log(valoresUsuario.value[0].id_user)

    // this.idUsuario = valoresUsuario.value[0].id_user

    // this.authSvc.controlMenu(this.idUsuario).subscribe(data=>{

    //   this.arrayRespuestaMenu = data
    //   console.log('Respuesta')
    //   console.log(this.arrayRespuestaMenu)

    //   for(let a = 0 ; a < this.menu.length ; a++){
    //     this.menu[a].hidden = true
    //   }

    //   for(let b = 0 ; b < this.arrayRespuestaMenu.length ; b++ ){
    //     this.menu[this.arrayRespuestaMenu[b].idMenu].hidden = false
    //   }

    // })

  }


  ngOnInit(): void {
  }

  refrescarAlertas() {

    let total = 0;

    this.authSvc.controlPedidosPagadosBadge().subscribe(data => {
      this.pedidosPagados = data
      total += this.pedidosPagados

      this.authSvc.controlPedidosAlmacen().subscribe(data => {
        this.pedidosPendientes = data
        total += this.pedidosPendientes

        this.authSvc.badgePedidosFraccionados().subscribe(data => {
          this.pedidosFraccionados = data
          total += this.pedidosFraccionados

          this.authSvc.badgePedidosSinStockMakro().subscribe(data => {
            this.makroSinStock = data
            total += this.makroSinStock

            this.authSvc.badgeAliexpress().subscribe(data => {
              this.erroresAli = data
              total += this.erroresAli

              this.authSvc.badgeCategoriasRedireccionadas().subscribe(data => {
                this.redireccionadas = data
                total += this.redireccionadas

                this.authSvc.countDeCombinadosPredeterminadosSinStock().subscribe(data => {
                  this.predeterminados = data
                  total += this.predeterminados

                  this.authSvc.badgePreciosCambiados().subscribe(data => {
                    this.preciosCambiados = data
                    total += this.preciosCambiados

                    this.authSvc.countAlertasAmazon().subscribe(data => {

                      this.mpAmazon = data
                      total += this.mpAmazon

                      this.authSvc.countPreAlmacen().subscribe(data => {

                        this.preAlmacen = data
                        total += this.preAlmacen

                        this.authSvc.badgeCategoriasVacias().subscribe(data => {

                          this.categoriasVacias = data
                          total += this.categoriasVacias

                          this.authSvc.badgeTransferenciaBancariaSinStock().subscribe(data => {

                            this.pedidosTransferencia = data
                            total += this.pedidosTransferencia

                            //Pendientes Ax
                            let jsonToken = {
                              'email': 'rgutierrez@hidalgosgroup.com',
                              'password': 'Orion2021'
                            }

                            this.authSvc.cargarToken(jsonToken).subscribe(data => {
                              let token = data['details'].access_token

                              let jsontTok = { 'token': token }

                              this.authSvc.pedidosPendientesAx(jsontTok).subscribe(data => {
                                this.pendientesAx = data['details'].listado.length
                                total += this.pendientesAx

                                this.authSvc.badgePedidosPendienteValidacion().subscribe(data => {

                                  this.pedidosPendientesValidacion = data
                                  total += this.pedidosPendientesValidacion

                                  this.authSvc.badgePedidosNoEnviados().subscribe(data => {

                                    this.pedidosNoEnviados = data
                                    total += this.pedidosNoEnviados

                                    this.authSvc.badgeProductosDiferenciaPreciosCombinados().subscribe(data => {

                                      this.productosCombinadosDiferentes = data
                                      total += this.productosCombinadosDiferentes

                                      this.authSvc.countPrecioBaseMenorPrecioOferta().subscribe(data => {

                                        this.precioBaseMenorPrecioOferta = data
                                        total += this.precioBaseMenorPrecioOferta

                                        this.authSvc.badgePedidosDuplicados().subscribe(data => {
                                          this.pedidosDuplicados = data
                                          total += this.pedidosDuplicados

                                          this.authSvc.countProductosCategorizadosOulet().subscribe(data => {
                                            this.productosCategorizasdosOulet = data
                                            total += this.productosCategorizasdosOulet

                                            this.authSvc.countProductosSinCategoriaPredeterminada().subscribe(data => {
                                              this.productosSinCategoriaPredeterminada = data
                                              total += this.productosSinCategoriaPredeterminada

                                              if (total > 0) {
                                                this.menu[0].badge = {
                                                  text: `${total}`,
                                                  status: "danger"
                                                }
                                              }

                                            })

                                          })

                                        })

                                      })

                                    })

                                  })

                                })

                              })

                            })

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

  refrescarBadgeManoMano() {

    let ManoMano = 0

    this.authSvc.controlManoManoBadge().subscribe(data => {
      this.manoMano = data
      ManoMano = this.manoMano

      if (ManoMano > 0) {
        this.menu[8].children[0].badge = {
          text: `${ManoMano}`,
          status: "danger"
        }

        this.menu[8].badge = {
          text: `${ManoMano}`,
          status: "danger"
        }

      }

      console.log(this.manoMano)

    })
  }

  refrescarProductosSinEan13() {

    let productos = 0

    this.authSvc.countProductosSinEan13().subscribe(data => {

      this.productosSinEan13 = data
      productos = this.productosSinEan13

      console.log('Productos : ' + productos)

      if (productos > 0) {
        this.menu[7].children[0].badge = {
          text: `${productos}`,
          status: "danger"
        }
        this.menu[7].children[0].children[9].badge = {
          text: `${productos}`,
          status: "danger"
        }

      }

    })

  }

  refrescarProductosSinMp() {

    let productosSinMp = 0

    this.authSvc.countProductosSinMPNombreArticulo().subscribe(data => {

      this.productosSinMpNombreArticulo = data
      productosSinMp = this.productosSinMpNombreArticulo

      if (productosSinMp > 0) {
        this.menu[7].children[0].children[10].badge = {
          text: `${productosSinMp}`,
          status: "danger"
        }

      }

    })

  }

  refrescarProductosSinBullets() {

    let productosSinBullet = 0

    this.authSvc.countProductosSinBullets().subscribe(data => {

      this.productosSinBullets = data
      productosSinBullet = this.productosSinBullets

      if (productosSinBullet > 0) {
        this.menu[7].children[0].children[8].badge = {
          text: `${productosSinBullet}`,
          status: "danger"
        }

      }

    })

  }

  refrescarCategoriasSinFacetas() {

    let categoriasSinFacetas = 0
    this.authSvc.countCategoriasSinFacetas().subscribe(data => {
      this.categoriasSinFacetas = data
      categoriasSinFacetas = this.categoriasSinFacetas

      if (categoriasSinFacetas > 0) {
        this.menu[7].children[1].children[2].badge = {
          text: `${categoriasSinFacetas}`,
          status: "danger"
        }
        this.menu[7].children[1].badge = {
          text: `${categoriasSinFacetas}`,
          status: "danger"
        }

      }

    })
  }

  refrescarParentProductos() {

    let total = 0

    this.authSvc.countProductosSinEan13().subscribe(data => {
      this.countProductosSinEan13 = data
      total += this.countProductosSinEan13

      this.authSvc.countProductosSinMPNombreArticulo().subscribe(data => {
        this.countProductosSinMpNombreArticulo = data
        total += this.countProductosSinMpNombreArticulo

        this.authSvc.countProductosSinBullets().subscribe(data => {
          this.countProductosSinBullets = data
          total += this.countProductosSinBullets

          this.authSvc.countCategoriasSinFacetas().subscribe(data => {
            this.countCategoriasSinFacetas = data
            total += this.countCategoriasSinFacetas

            this.menu[7].badge = {
              text: `${total}`,
              status: "danger"
            }

          })
        })

      })

    })

  }

  refrescarSubMenuProductos() {

    let total = 0

    this.authSvc.countProductosSinEan13().subscribe(data => {
      this.countProductosSinEan13 = data
      total += this.countProductosSinEan13

      this.authSvc.countProductosSinMPNombreArticulo().subscribe(data => {
        this.countProductosSinMpNombreArticulo = data
        total += this.countProductosSinMpNombreArticulo

        this.authSvc.countProductosSinBullets().subscribe(data => {
          this.countProductosSinBullets = data
          total += this.countProductosSinBullets

          this.menu[7].children[0].badge = {
            text: `${total}`,
            status: "danger"
          }

        })

      })

    })

  }

}

