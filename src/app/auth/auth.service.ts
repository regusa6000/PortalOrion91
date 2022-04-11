import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User, UserResponse } from '../shared/guards/components/models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  urlVentasSemanales: string = 'http://vpnxer.grupohidalgos.com:8070/ventasSemanalesTiendas';
  urlVentasSemanalesTiendas: string = 'http://vpnxer.grupohidalgos.com:8070/ventasSemanalesTodasLasTiendas';

  //Badges
  urlControlPedidosPagadosBadge: string = 'http://vpnxer.grupohidalgos.com:8070/controlPedidosPagadosBadge';
  urlControlPedidosAlmacenBadge: string = 'http://vpnxer.grupohidalgos.com:8070/pedidosAlmacenBadge';
  urlBadgePagosFraccionados: string = 'http://vpnxer.grupohidalgos.com:8070/badgePedidosFraccionados';
  urlBadgePedidosSinStockMakro: string = 'http://vpnxer.grupohidalgos.com:8070/badgepedidosSinStockMakro';
  urlBadgeAliexpress: string = 'http://vpnxer.grupohidalgos.com:8070/badgeAliExpress';
  urlCombinadosPredeterminadosSinStockBadge: string = 'http://vpnxer.grupohidalgos.com:8070/CombinadospredeterminadosSinStockCount';
  urlControlManoManoBadge: string = 'http://vpnxer.grupohidalgos.com:8070/controlManoManoBadge';
  urlBadgeCategoriasVacias: string = 'http://vpnxer.grupohidalgos.com:8070/controlCategoriasVaciasBadge';
  urlBadgeTransferenciaBancariaSinStock: string = 'http://vpnxer.grupohidalgos.com:8070/countTransferenciaBancariaSinStock'

  //Alertas
  urlPagosFraccionados: string = 'http://vpnxer.grupohidalgos.com:8070/pedidosFraccionados';
  urlControlPedidosPagados: string = 'http://vpnxer.grupohidalgos.com:8070/controlPedidosPagados';
  urlControlPedidosAlmacen: string = 'http://vpnxer.grupohidalgos.com:8070/controlPedidosAlmacen';
  urlControlPreCompra: string = 'http://vpnxer.grupohidalgos.com:8070/controlPreCompras';
  urlPedidosSinStockMakro: string = 'http://vpnxer.grupohidalgos.com:8070/pedidosSinStockMakro';
  urlControlAliexpress: string = 'http://vpnxer.grupohidalgos.com:8070/controlAliExpress';
  urlCombinadosPredeterminadosSinStock: string = 'http://vpnxer.grupohidalgos.com:8070/CombinadospredeterminadosSinStock';
  urlAlertasElementor: string = 'http://vpnxer.grupohidalgos.com:8070/productosDescatalogadosElementor'
  urlBadgeProductosDescatalogadosElementor: string = 'http://vpnxer.grupohidalgos.com:8070/badgeProductosDescatalogadosElementor';
  urlCatedoriasVacias: string = 'http://vpnxer.grupohidalgos.com:8070/controlCategoriasVacias';
  urlTransferenciasBancariasSinStock: string = 'http://vpnxer.grupohidalgos.com:8070/transferenciaBancariaSinStock';

  //Envios
  urlControlTransportistas: string = 'http://vpnxer.grupohidalgos.com:8070/controlTransportistas';
  urlCargarComboName: string = 'http://vpnxer.grupohidalgos.com:8070/cargarComboName';
  urlControlTransportistasName: string = 'http://vpnxer.grupohidalgos.com:8070/controlTransportistasName/';
  urlPorcentajeTransportistas: string = 'http://vpnxer.grupohidalgos.com:8070/porcentajeTransportistas';

  //Imagenes
  urlImagenes: string = 'http://vpnxer.grupohidalgos.com:8070/imagenes';

  //Control ManoMano
  urlControlManoAMano: string = 'http://vpnxer.grupohidalgos.com:8070/manoAmano';
  urlControlManoAManoPorId: string = 'http://vpnxer.grupohidalgos.com:8070/manoAmano/';
  urlManoManoDistinto: string = 'http://vpnxer.grupohidalgos.com:8070/manoAManoDivision';
  urlManoManoPrimero: string = 'http://vpnxer.grupohidalgos.com:8070/manoAmanoPorPrimero';
  urlManoManoSegundo: string = 'http://vpnxer.grupohidalgos.com:8070/manoAmanoPorSegundo';
  urlManoManoTercero: string = 'http://vpnxer.grupohidalgos.com:8070/manoAmanoPorTercero';
  urlManoManoCuarto: string = 'http://vpnxer.grupohidalgos.com:8070/manoAmanoPorCuarto';
  urlManoManoSexto: string = 'http://vpnxer.grupohidalgos.com:8070/manoAmanoPorSexto';
  urlManoManoSeptimo: string = 'http://vpnxer.grupohidalgos.com:8070/manoAmanoPorSeptimo';
  urlManoManoOctavo: string = 'http://vpnxer.grupohidalgos.com:8070/manoAmanoPorOctavo';

  //Roturas Stock
  urlRoturaStock: string = 'http://vpnxer.grupohidalgos.com:8070/roturaStock';

  //Rutas de Makro
  urlMakroTodosLosProductos: string = 'http://vpnxer.grupohidalgos.com:8070/productosTotalesMakro';
  urlMakroOffersPublicados: string = 'http://vpnxer.grupohidalgos.com:8070/offersPublicados';
  urlMakroOffersNoPublicados: string = 'http://vpnxer.grupohidalgos.com:8070/offerNoPublicados';

  //Rutas de Rango de Precios de Makro
  urlTotalDeProductosRangoMakro: string = 'http://vpnxer.grupohidalgos.com:8070/productosPublicadosMakro';
  urlListaDeRangosMakroPorEan13: string = 'http://vpnxer.grupohidalgos.com:8070/listaDeRangosMakro/';
  urlActualizarRangosMakro: string = 'http://vpnxer.grupohidalgos.com:8070/actualizarRango';
  urlBuscarListado: string = 'http://vpnxer.grupohidalgos.com:8070/buscarListado/';
  urlRegistrarNuevoRango: string = 'http://vpnxer.grupohidalgos.com:8070/registrarRangoMakro';
  urlEliminarRango: string = 'http://vpnxer.grupohidalgos.com:8070/eliminarRango/';

  //Rutas de Rango de Precios de Makro Select
  urlProductosPublicadosMakroConRangoYConStock: string = 'http://vpnxer.grupohidalgos.com:8070/productosPublicadosMakroConRangoYConStock';
  urlProductosPublicadosMakroConRangoYSinStock: string = 'http://vpnxer.grupohidalgos.com:8070/productosPublicadosMakroConRangoYSinStock';
  urlProductosPublicadosMakroSinRangoYConStock: string = 'http://vpnxer.grupohidalgos.com:8070/productosPublicadosMakroSinRangoYConStock';
  urlProductosPublicadosMakroSinRangoYSinStock: string = 'http://vpnxer.grupohidalgos.com:8070/productosPublicadosMakroSinRangoYSinStock';

  //PruebaRangos
  urlPruebaMakro: string = 'http://vpnxer.grupohidalgos.com:8070/pruebaRangos';


  //Categorias Redireccionadas
  urlCategoriasRedireccionadas: string = 'http://vpnxer.grupohidalgos.com:8070/categoriasRedireccionadas';
  urlCountCategoriasRedireccionadas: string = 'http://vpnxer.grupohidalgos.com:8070/countCategoriasRedireccionadas'

  //Rutas Ventas Productos
  urlVentaProductos: string = 'http://vpnxer.grupohidalgos.com:8070/ventaProductos/';

  //Sumatorias por Semana
  urlSumatoriaPorSemana: string = 'http://vpnxer.grupohidalgos.com:8070/sumatoriaPorSemana';
  urlSumatoriaPorSemanaOrion91: string = 'http://vpnxer.grupohidalgos.com:8070/sumatoriaOrion';
  urlSumatoriaPorSemanaManoMano: string = 'http://vpnxer.grupohidalgos.com:8070/sumatoriaManoMano';
  urlSumatorioPorSemanaCarrefour: string = 'http://vpnxer.grupohidalgos.com:8070/sumatorioCarrefour';
  urlSumatorioPorSemanaAliExpress: string = 'http://vpnxer.grupohidalgos.com:8070/sumatorioAliExpress';
  urlSumatorioPorSemanaAmazon: string = 'http://vpnxer.grupohidalgos.com:8070/sumatoriaAmazon';
  urlSumatorioPorSemanaGrupon: string = 'http://vpnxer.grupohidalgos.com:8070/sumatorioGrupon';
  urlSumatorioPorSemanaEmbargos: string = 'http://vpnxer.grupohidalgos.com:8070/sumatorioEmbargos';
  urlSumatorioPorSemanaMequedoUno: string = 'http://vpnxer.grupohidalgos.com:8070/sumatorioMequedoUno';
  urlSumatorioPorSemanaFnac: string = 'http://vpnxer.grupohidalgos.com:8070/sumatorioFnac';
  urlSumatorioPorSemanaWish: string = 'http://vpnxer.grupohidalgos.com:8070/sumatorioWish';
  urlSumatorioPorSemanaMakro: string = 'http://vpnxer.grupohidalgos.com:8070/sumatorioMakro';
  urlSumatorioPorSemanaPcComponentes: string = 'http://vpnxer.grupohidalgos.com:8070/sumatorioPcComponenetes';
  urlSumatorioPorSemanaSprinter: string = 'http://vpnxer.grupohidalgos.com:8070/sumatorioSprinter';
  urlSumatorioPorSemanaBulevip:string = 'http://vpnxer.grupohidalgos.com:8070/sumatorioBulevip';

  //Rutas de Estadisticas
  urlImporteDeVentas: string = 'http://vpnxer.grupohidalgos.com:8070/importeDeVentas';
  urlImporteDeVentasManoMano: string = 'http://vpnxer.grupohidalgos.com:8070/importeDeVentasManoMano';
  urlImporteDeVentasCarrefour: string = 'http://vpnxer.grupohidalgos.com:8070/importeDeVentasCarrefour';
  urlImporteDeVentasAliExpress: string = 'http://vpnxer.grupohidalgos.com:8070/importeDeVentasAliExpress';
  urlImporteDeVentasAmazon: string = 'http://vpnxer.grupohidalgos.com:8070/importeDeVentasAmazon';
  urlImporteDeVentasGroupon: string = 'http://vpnxer.grupohidalgos.com:8070/importeDeVentasGroupon';
  urlImporteDeVentasEmbargos: string = 'http://vpnxer.grupohidalgos.com:8070/importeDeVentasEmbargos';
  urlImporteDeVentasMequedoUno: string = 'http://vpnxer.grupohidalgos.com:8070/importeDeVentasMequedoUno';
  urlImporteDeVentasFnac: string = 'http://vpnxer.grupohidalgos.com:8070/importeDeVentasFnac';
  urlImporteDeVentasWish: string = 'http://vpnxer.grupohidalgos.com:8070/importeDeVentasWish';
  urlImporteDeVentasMakro: string = 'http://vpnxer.grupohidalgos.com:8070/importeDeVentasMakro';
  urlImporteDeVetasPcComponentes: string = 'http://vpnxer.grupohidalgos.com:8070/importeDeVentasPcComponentes';
  urlImporteDeVentasSprinter: string = 'http://vpnxer.grupohidalgos.com:8070/importeDeVentasSprinter';
  urlImporteDeVentasBulevip: string = 'http://vpnxer.grupohidalgos.com:8070/importeDeVentasBulevip';

  //Rutas de Historico de Stock
  urlGraficoIdProducto: string = 'http://vpnxer.grupohidalgos.com:8070/controlStockGraficoIdProducto/';
  urlControlHistoricoStock: string = 'http://vpnxer.grupohidalgos.com:8070/controlHistoricoStock/';

  //Rutas Ventas Categorias
  urlCategoriasPorMeses: string  = 'http://vpnxer.grupohidalgos.com:8070/categoriasPorMeses';
  urlCategoriasGeneral: string = 'http://vpnxer.grupohidalgos.com:8070/categoriasGeneral';
  urlIdCategoriaPorMeses: string = 'http://vpnxer.grupohidalgos.com:8070/categoriaIdPorMeses/';
  urlCategoriasIdPorMesesPorTienda: string = 'http://vpnxer.grupohidalgos.com:8070/categoriaIdPorMesesPorTienda/';
  urlCategoriaPorTiendaOrionPorIdCategoria: string = 'http://vpnxer.grupohidalgos.com:8070/categoriaPorTiendaOrionPorIdCategoria/';
  urlCategoriaPorTiendaWishPorIdCategoria: string = 'http://vpnxer.grupohidalgos.com:8070/categoriaPorTiendaWishPorIdCategoria/';
  urlCategoriasPorTienda: string = 'http://vpnxer.grupohidalgos.com:8070/categoriasPorTiendas/';
  urlCategoriasPorTiendaOrion: string = 'http://vpnxer.grupohidalgos.com:8070/categoriasPorTiendaOrion';
  urlCategoriasPorTiendaWish: string = 'http://vpnxer.grupohidalgos.com:8070/categoriasPorTiendaWish';

  //Productos top entre fechas
  urlProductosTopEntreFechas: string = 'http://vpnxer.grupohidalgos.com:8070/productosTopEntreFechas';
  urlProductosTopUltimos: string = 'http://vpnxer.grupohidalgos.com:8070/productosTopUltimosDias';
  urlProductosTopHoy: string = 'http://vpnxer.grupohidalgos.com:8070/productosTopHoy';

  //Productos por categoria
  urlCategoriaProductosName: string = 'http://vpnxer.grupohidalgos.com:8070/categoriasProductosName'
  urlproductosPorIdCategoria: string = 'http://vpnxer.grupohidalgos.com:8070/productosPorIdCategoria/';
  urlActualizarProducto: string = 'http://vpnxer.grupohidalgos.com:8070/actualizarPosicionProducto/';

  //Grafico Categorias
  urlGraficoCategorias: string = 'http://vpnxer.grupohidalgos.com:8070/arbolCategorias';


  //Opiniones
  urlListadoCanales: string = 'http://vpnxer.grupohidalgos.com:8070/listadoCanales';
  urlListadoGeneralOpiniones: string = 'http://vpnxer.grupohidalgos.com:8070/listadoGeneral';
  urlBaseTipoOpinion: string = 'http://vpnxer.grupohidalgos.com:8070/baseTipoOpinion/';
  urlRegistrarPorcentaje: string = 'http://vpnxer.grupohidalgos.com:8070/registrarPorcentaje'
  urlActualizarRegistroPorcentaje: string = 'http://vpnxer.grupohidalgos.com:8070/actualizarPorcentaje';
  urlEliminarRegistroPorcentaje: string = 'http://vpnxer.grupohidalgos.com:8070/eliminarPorcentaje/';
  urlSelectOpiniones: string = 'http://vpnxer.grupohidalgos.com:8070/rellenarSelect';
  urlGraficoOpiniones: string = 'http://vpnxer.grupohidalgos.com:8070/cargarGrafico/';


  //Incidencias
  urlIncidenciasMensuales: string = 'http://vpnxer.grupohidalgos.com:8070/productosTopIncidenciasMensual';

  //Zonas
  urlCargarZonas: string = 'http://vpnxer.grupohidalgos.com:8070/cargarZonas';
  urlCargarLinkPorIdZona: string = 'http://vpnxer.grupohidalgos.com:8070/cargarLinksPorZonas/';
  urlCrearNuevaZona: string = 'http://vpnxer.grupohidalgos.com:8070/crearNuevaZona';
  urlActualizarZona: string = 'http://vpnxer.grupohidalgos.com:8070/actualizarDatosZona'
  urlCargarLinks: string = 'http://vpnxer.grupohidalgos.com:8070/cargarLinks';
  urlCargarSelectZonas: string = 'http://vpnxer.grupohidalgos.com:8070/cargarSelectZonas';
  urlCrearNuevoLink: string = 'http://vpnxer.grupohidalgos.com:8070/crearNuevoLink';
  urlActualizarLink: string = 'http://vpnxer.grupohidalgos.com:8070/actualizarLink';
  urlEliminarLink: string = 'http://vpnxer.grupohidalgos.com:8070/eliminarLink/';

  //Precios Cambiados
  urlPreciosCambiados: string = 'http://vpnxer.grupohidalgos.com:8070/controlPreciosCambiadosAx';
  urlBadgePreciosCambiados: string = 'http://vpnxer.grupohidalgos.com:8070/badgeControlPreciosCambiadosAx';


  //Faqs
  urlCargarFaqs: string = 'http://vpnxer.grupohidalgos.com:8070/cargarFaqs';
  urlCrearFaqs: string = 'http://vpnxer.grupohidalgos.com:8070/crearFaq';
  urlActualizarFaq: string = 'http://vpnxer.grupohidalgos.com:8070/actualizarFaq';
  urlEliminarFaq: string = 'http://vpnxer.grupohidalgos.com:8070/eliminarFaq/';


  //Alertas Amazon
  urlAlertasAmazon: string = 'http://vpnxer.grupohidalgos.com:8070/alertaCaracteresAmazon';
  urlCountAlertasAmazon: string = 'http://vpnxer.grupohidalgos.com:8070/countAlertaCaracteresAmazon';

  //Alertas Pre-Almacen
  urlPreAlamcen: string = 'http://vpnxer.grupohidalgos.com:8070/preAlmacen';
  urlCountPreAlmacen: string = 'http://vpnxer.grupohidalgos.com:8070/countPreAlmacen';

  //Favoritos
  urlCargarTopFavoritos: string = 'http://vpnxer.grupohidalgos.com:8070/cargarTopFavoritos';
  urlCargarGraficoFavoritos: string = 'http://vpnxer.grupohidalgos.com:8070/cargarGraficoFavoritos';

  //Precios Fijos
  urlCargarSelectPreciosFijos: string = 'http://vpnxer.grupohidalgos.com:8070/cargarSelectProductos';
  urlCargarTablaPreciosFijos: string = 'http://vpnxer.grupohidalgos.com:8070/cargarTablaPreciosFijos';
  urlRegistrarPrecioFijo: string = 'http://vpnxer.grupohidalgos.com:8070/registrarPrecioFijo';
  urlEliminarPrecioFijo: string = 'http://vpnxer.grupohidalgos.com:8070/eliminarPrecioFijo/';
  urlActualizarPrecioFijo: string = 'http://vpnxer.grupohidalgos.com:8070/actualizarPrecioFijo';

  //Ventas por Habitante
  urlVentasHabitantes: string = 'http://vpnxer.grupohidalgos.com:8070/ventasHabitantes'

  //Dashboard
  urlAvanceSemanal: string = 'http://vpnxer.grupohidalgos.com:8070/avanceSemanal'
  urlGraficoVentas: string = 'http://vpnxer.grupohidalgos.com:8070/graficoVentas'
  urlGraficoVentasUnMes: string = 'http://vpnxer.grupohidalgos.com:8070/graficoVentasUnMes';
  urlGraficoVentasUnaSemana: string = 'http://vpnxer.grupohidalgos.com:8070/graficoVentasUnaSemana'
  urlVentasUltimaSemana: string = 'http://vpnxer.grupohidalgos.com:8070/ventasSemanalesDashBoard';
  urlRoturaStockEnSemana: string = 'http://vpnxer.grupohidalgos.com:8070/roturaDeStock';
  urlGraficoVentasPaisesHoy: string = 'http://vpnxer.grupohidalgos.com:8070/graficoVentasPaisesHoy';
  urlGraficoVentasPaisesUnaSemana: string = 'http://vpnxer.grupohidalgos.com:8070/graficoVentasPaisesUnaSemana';
  urlGraficoVentasPaisesUnMes: string = 'http://vpnxer.grupohidalgos.com:8070/graficoVentasPaisesUnMes';
  urlGraficoComparacionVentas: string = 'http://vpnxer.grupohidalgos.com:8070/graficoComparacionVentas';

  public loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {}

  get isLogged(): Observable<boolean>{
    return this.loggedIn.asObservable();
  }

  //Parte del Login
    login(authData: User): Observable<UserResponse | void> {
      return this.http
      .post<UserResponse>('http://vpnxer.grupohidalgos.com:8070/login/', authData)
      .pipe(
        map( (res: UserResponse) => {
          console.log(res.data)

          this.saveToken(res.data[0].password);
          this.loggedIn.next(true);
          localStorage.setItem('usuario',JSON.stringify(res.data[0]))
          console.log(res)
          return res;
        }),
        catchError( (err) => this.handlerError(err) )
      );
    }

  private saveToken(token: string):void{
    localStorage.setItem('token',token);
  }

  private handlerError(err: { message: any; }): Observable<never>{

    let errorMessage = 'An error Occurred';

    if(err){
        errorMessage = `Error: code ${err.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  //Ventas Semanales
  ventasSemanales(){
    let direccion = this.urlVentasSemanales
    return this.http.get(direccion)
  }
  ventasSemanalesTiendas(){
    let direccion = this.urlVentasSemanalesTiendas
    return this.http.get(direccion)
  }

  //PreCompra
  cargarTablaPreCompra(){
    let direccion = this.urlControlPreCompra;
    return this.http.get(direccion);
  }

  //Badges
  controlPedidosPagadosBadge(){
    let direccion = this.urlControlPedidosPagadosBadge
    return this.http.get(direccion)
  }
  controlPedidosAlmacen(){
    let direccion = this.urlControlPedidosAlmacenBadge
    return this.http.get(direccion)
  }
  badgePedidosFraccionados(){
    let direccion = this.urlBadgePagosFraccionados
    return this.http.get(direccion)
  }
  badgePedidosSinStockMakro(){
    let direccion = this.urlBadgePedidosSinStockMakro
    return this.http.get(direccion)
  }
  badgeAliexpress(){
    let direccion = this.urlBadgeAliexpress
    return this.http.get(direccion)
  }
  countDeCombinadosPredeterminadosSinStock(){
    let direccion = this.urlCombinadosPredeterminadosSinStockBadge
    return this.http.get(direccion)
  }
  badgeCategoriasRedireccionadas(){
    let direccion = this.urlCountCategoriasRedireccionadas
    return this.http.get(direccion)
  }
  controlManoManoBadge(){
    let direccion = this.urlControlManoManoBadge
    return this.http.get(direccion)
  }
  badgeProductosDescatalogadosElementor(){
    let direccion = this.urlBadgeProductosDescatalogadosElementor
    return this.http.get(direccion)
  }
  badgeCategoriasVacias(){
    let direccion = this.urlBadgeCategoriasVacias
    return this.http.get(direccion)
  }
  badgeTransferenciaBancariaSinStock(){
    let direccion = this.urlBadgeTransferenciaBancariaSinStock
    return this.http.get(direccion)
  }


  //Alertas
  pedidosPagosFraccionados(){
    let direccion = this.urlPagosFraccionados
    return this.http.get(direccion)
  }
  cargarTablaPedidosPagados(){
    let direccion = this.urlControlPedidosPagados;
    return this.http.get(direccion)
  }
  cargarTablaPedidosAlmacen(){
    let direccion = this.urlControlPedidosAlmacen;
    return this.http.get(direccion);
  }
  pedidosSinStockMakro(){
    let direccion = this.urlPedidosSinStockMakro
    return this.http.get(direccion)
  }
  controlAliExpress(){
    let direccion = this.urlControlAliexpress
    return this.http.get(direccion)
  }
  combinadosPredeterminadosSinStock(){
    let direccion = this.urlCombinadosPredeterminadosSinStock
    return this.http.get(direccion)
  }
  alertasElementor(){
    let direccion = this.urlAlertasElementor
    return this.http.get(direccion)
  }
  categoriasVacias(){
    let direccion = this.urlCatedoriasVacias
    return this.http.get(direccion)
  }
  transferenciaBancariaSinStock(){
    let direccion = this.urlTransferenciasBancariasSinStock
    return this.http.get(direccion)
  }

   //Envios
  cargarTablaTransportistas(){
    let direccion = this.urlControlTransportistas;
    return this.http.get(direccion)
  }
  cargarComboTransportistaName(){
    let direccion = this.urlCargarComboName
    return this.http.get(direccion)
  }
  cargarTransportistaName(id: number){
    let direccion = this.urlControlTransportistasName + id
    return this.http.get(direccion)
  }
  porcentajeTransportistas(){
    let direccion = this.urlPorcentajeTransportistas
    return this.http.get(direccion)
  }

  //Control de Imagenes
  controlImagenes(){
    let direccion = this.urlImagenes
    return this.http.get(direccion)
  }

  //ManoMano
  cargarTablaDivision(){
    let direccion = this.urlManoManoDistinto
    return this.http.get(direccion)
  }
  cargarTablaPrimeraDivision(){
    let direccion = this.urlManoManoPrimero
    return this.http.get(direccion)
  }
  cargarTablaSegundaDivision(){
    let direccion = this.urlManoManoSegundo
    return this.http.get(direccion)
  }
  cargarTablaTerceraDivision(){
    let direccion = this.urlManoManoTercero
    return this.http.get(direccion)
  }
  cargarTablaCuartaDivision(){
    let direccion = this.urlManoManoCuarto
    return this.http.get(direccion)
  }
  cargarTablaSextaDivision(){
    let direccion = this.urlManoManoSexto
    return this.http.get(direccion)
  }
  cargarTablaSeptimaDivision(){
    let direccion = this.urlManoManoSeptimo
    return this.http.get(direccion)
  }
  cargarTablaOctavaDivision(){
    let direccion = this.urlManoManoOctavo
    return this.http.get(direccion)
  }

  //Roturas Stock
  controlRoturaStock(){
    let direccion = this.urlRoturaStock
    return this.http.get(direccion)
  }

  //Funciones de Makro
  cargarMakroTodosLosProductos(){
    let direccion = this.urlMakroTodosLosProductos
    return this.http.get(direccion)
  }
  cargarMakroOffersPublicados(){
    let direccion = this.urlMakroOffersPublicados
    return this.http.get(direccion)
  }
  cargarMakroOffersNoPublicados(){
    let direccion = this.urlMakroOffersNoPublicados
    return this.http.get(direccion)
  }

  //Rangos de Makro
  totalProductosPublicadosMakro(){
    let direccion = this.urlTotalDeProductosRangoMakro
    return this.http.get(direccion)
  }

  listaDeRangosMakroPorEan13(ean13: number){
    let direccion = this.urlListaDeRangosMakroPorEan13 + ean13
    return this.http.get(direccion)
  }

  productosPublicadosMakroConRangoYConStock(){
    let direccion = this.urlProductosPublicadosMakroConRangoYConStock
    return this.http.get(direccion)
  }

  productosPublicadosMakroConRangoYSinStock(){
    let direccion = this.urlProductosPublicadosMakroConRangoYSinStock
    return this.http.get(direccion)
  }

  productosPublicadosMakroSinRangoYConStock(){
    let direccion = this.urlProductosPublicadosMakroSinRangoYConStock
    return this.http.get(direccion)
  }

  productosPublicadosMakroSinRangoYSinStock(){
    let direccion = this.urlProductosPublicadosMakroSinRangoYSinStock
    return this.http.get(direccion)
  }

  buscarListado(ean13: number){
    let direccion = this.urlBuscarListado + ean13
    return this.http.get(direccion)
  }

  registrarRangoMakro(json: any){
    let direccion = this.urlRegistrarNuevoRango
    return this.http.post(direccion,json)
  }

  actualizarRangoMakro(json: any){
    let direccion = this.urlActualizarRangosMakro
    return this.http.put(direccion, json)
  }

  eliminarRango(ean13: number, rango: number){
    let direccion = this.urlEliminarRango + ean13 + "/" + rango
    return this.http.delete(direccion)
  }

  //PruebaRango
  pruebaRango(){
      let direccion = this.urlPruebaMakro
      return this.http.get(direccion)
  }

  //Categorias Redireccionadas
  categoriasRedireccionadas(){
    let direccion = this.urlCategoriasRedireccionadas
    return this.http.get(direccion)
  }

  //Ventas Productos
  ventasProductos(idProducto: number, fechaInicio: any, fechaFin: any, tienda: number){
    let direccion = this.urlVentaProductos + idProducto + '/' + fechaInicio + '/' + fechaFin + '/' + tienda
    return this.http.get(direccion)
  }

  //Sumatorias por Año
  sumatoriaPorSemana(){
    let direccion = this.urlSumatoriaPorSemana
    return this.http.get(direccion)
  }
  sumatoriaPorSemanaOrion91(){
    let direccion = this.urlSumatoriaPorSemanaOrion91
    return this.http.get(direccion)
  }
  sumatoriaPorSemanaManoMano(){
    let direccion = this.urlSumatoriaPorSemanaManoMano
    return this.http.get(direccion)
  }
  sumatorioPorSemanaCarrefour(){
    let direccion = this.urlSumatorioPorSemanaCarrefour
    return this.http.get(direccion)
  }
  sumatorioPorSemanaAliExpress(){
    let direccion = this.urlSumatorioPorSemanaAliExpress
    return this.http.get(direccion)
  }
  sumatorioPorSemanaAmazon(){
    let direccion = this.urlSumatorioPorSemanaAmazon
    return this.http.get(direccion)
  }
  sumatorioPorSemanaGrupon(){
    let direccion = this.urlSumatorioPorSemanaGrupon
    return this.http.get(direccion)
  }
  sumatorioPorSemanaEmbargos(){
    let direccion = this.urlSumatorioPorSemanaEmbargos
    return this.http.get(direccion)
  }
  sumatorioPorSemanaMequedoUno(){
    let direccion = this.urlSumatorioPorSemanaMequedoUno
    return this.http.get(direccion)
  }
  sumatorioPorSemanaFnac(){
    let direccion = this.urlSumatorioPorSemanaFnac
    return this.http.get(direccion)
  }
  sumatorioPorSemanaWish(){
    let direccion = this.urlSumatorioPorSemanaWish
    return this.http.get(direccion)
  }
  sumatorioPorSemanaMakro(){
    let direccion = this.urlSumatorioPorSemanaMakro
    return this.http.get(direccion)
  }
  sumatorioPorSemanaPcComponentes(){
    let direccion = this.urlSumatorioPorSemanaPcComponentes
    return this.http.get(direccion)
  }
  sumatorioPorSemanaSprinter(){
    let direccion = this.urlSumatorioPorSemanaSprinter
    return this.http.get(direccion)
  }
  sumatorioPorSemanaBulevip(){
    let direccion = this.urlSumatorioPorSemanaBulevip
    return this.http.get(direccion)
  }

  //Funciones de Estadisticas
  importeDeVentas(){
    let direccion = this.urlImporteDeVentas
    return this.http.get(direccion)
  }
  importeDeVentasManoMano(){
    let direccion = this.urlImporteDeVentasManoMano
    return this.http.get(direccion)
  }
  importeDeVentasCarrefour(){
    let direccion = this.urlImporteDeVentasCarrefour
    return this.http.get(direccion)
  }
  importeDeVentasAliExpress(){
    let direccion = this.urlImporteDeVentasAliExpress
    return this.http.get(direccion)
  }
  importeDeVentasAmazon(){
    let direccion = this.urlImporteDeVentasAmazon
    return this.http.get(direccion)
  }
  importeDeVentasGroupon(){
    let direccion = this.urlImporteDeVentasGroupon
    return this.http.get(direccion)
  }
  importeDeVentasEmbargos(){
    let direccion = this.urlImporteDeVentasEmbargos
    return this.http.get(direccion)
  }
  importeDeVentasMequedoUno(){
    let direccion = this.urlImporteDeVentasMequedoUno
    return this.http.get(direccion)
  }
  importeDeVentasFnac(){
    let direccion = this.urlImporteDeVentasFnac
    return this.http.get(direccion)
  }
  importeDeVentasWish(){
    let direccion = this.urlImporteDeVentasWish
    return this.http.get(direccion)
  }
  importeDeVentasMakro(){
    let direccion = this.urlImporteDeVentasMakro
    return this.http.get(direccion)
  }
  importeDeVentasPcComponentes(){
    let direccion = this.urlImporteDeVetasPcComponentes
    return this.http.get(direccion)
  }
  importeDeVentasSprinte(){
    let direccion = this.urlImporteDeVentasSprinter
    return this.http.get(direccion)
  }
  importeDeVentasBulevip(){
    let direccion = this.urlImporteDeVentasBulevip
    return this.http.get(direccion)
  }


  //Historico de Stock
  cargarTablaHistoricoStock(id_producto : any){
    let direccion = this.urlControlHistoricoStock + id_producto;
    return this.http.get(direccion)
  }
  cargarGraficoIdProducto(ean13: number){
    let direccion = this.urlGraficoIdProducto + ean13
    return this.http.get(direccion)
  }

  //Ventas por categorias
  categoriasPorMeses(){
    let direccion = this.urlCategoriasPorMeses
    return this.http.get(direccion)
  }
  categoriasGeneral(){
    let direccion = this.urlCategoriasGeneral
    return this.http.get(direccion)
  }
  idCategoriaPorMeses(idcategory: number){
    let direccion = this.urlIdCategoriaPorMeses + idcategory
    return this.http.get(direccion)
  }
  categoriaIdPorMesesPorTienda(variableTienda: number,idCategoria: number){
    let direccion = this.urlCategoriasIdPorMesesPorTienda + variableTienda + '/' + idCategoria
    return this.http.get(direccion)
  }
  categoriaPorTiendaOrionPorIdCategoria(idCategory: number){
    let direccion = this.urlCategoriaPorTiendaOrionPorIdCategoria + idCategory
    return this.http.get(direccion)
  }
  categoriaPorTiendaWishPorIdCategoria(idCategory: number){
    let direccion = this.urlCategoriaPorTiendaWishPorIdCategoria + idCategory
    return this.http.get(direccion)
  }
  categoriaPorTienda(numeroCategoria: number){
    let direccion = this.urlCategoriasPorTienda + numeroCategoria
    return this.http.get(direccion)
  }
  categoriasPorTiendaOrion(){
    let direccion = this.urlCategoriasPorTiendaOrion
    return this.http.get(direccion)
  }
  CategoriasPorTiendaWish(){
    let direccion = this.urlCategoriasPorTiendaWish
    return this.http.get(direccion)
  }

  //Productos top entre fechas
  productosTopEntreFechas(fechaInicio: any, fechaFin: any){
    let direccion = this.urlProductosTopEntreFechas + '/' + fechaInicio + '/' + fechaFin
    return this.http.get(direccion)
  }
  productosTopUltimos(){
    let direccion = this.urlProductosTopUltimos
    return this.http.get(direccion)
  }
  productosTopHoy(){
    let direccion = this.urlProductosTopHoy
    return this.http.get(direccion)
  }

  //Categoria por Producto
  categoriasProductosName(){
    let direccion = this.urlCategoriaProductosName
    return this.http.get(direccion)
  }
  productosPorIdCategoria(idCategoria: number){
    let direccion = this.urlproductosPorIdCategoria + idCategoria
    return this.http.get(direccion)
  }
  actualizarProductoCategoria(idCategoria: number, idProducto: number, posicion: number){
    let direccion = this.urlActualizarProducto + idCategoria + '/' + idProducto + '/' + posicion
    return this.http.get(direccion)
  }

  //Grafico Categorias
  cargarGraficoCategorias(){
    let direccion = this.urlGraficoCategorias
    return this.http.get(direccion)
  }

  //Opiniones
  listadoCanales(){
    let direccion = this.urlListadoCanales
    return this.http.get(direccion)
  }
  listadoGeneralOpiniones(){
    let direccion = this.urlListadoGeneralOpiniones
    return this.http.get(direccion)
  }
  baseTipoOpinion(id: number){
    let direccion = this.urlBaseTipoOpinion + id
    return this.http.get(direccion)
  }
  registrarPorcentajeCanal(json: any){
    let direccion = this.urlRegistrarPorcentaje
    return this.http.post(direccion,json)
  }
  actualizarRegistroPorcentaje(json: any){
    let direccion = this.urlActualizarRegistroPorcentaje
    return this.http.put(direccion,json)
  }
  eliminarRegistroPorcentaje(idValor: any){
    let direccion = this.urlEliminarRegistroPorcentaje + idValor
    return this.http.delete(direccion)
  }
  cargarSelectOpiniones(){
    let direccion = this.urlSelectOpiniones
    return this.http.get(direccion)
  }
  cargarGraficoOpiniones(id: number){
    let direccion = this.urlGraficoOpiniones + id
    return this.http.get(direccion)
  }

  //Incidencias
  incidenciasMensuales(){
    let direccion = this.urlIncidenciasMensuales
    return this.http.get(direccion)
  }

  //Zonas
  cargarZonas(){
    let direccion = this.urlCargarZonas
    return this.http.get(direccion)
  }
  cargarLinksPorIdZona(idZona: number){
    let direccion = this.urlCargarLinkPorIdZona + idZona
    return this.http.get(direccion)
  }
  crearNuevaZona(json: any){
    let direccion = this.urlCrearNuevaZona
    return this.http.post(direccion,json)
  }
  actualizarZona(json: any){
    let direccion = this.urlActualizarZona
    return this.http.put(direccion,json)
  }
  cargarLinks(){
    let direccion = this.urlCargarLinks
    return this.http.get(direccion)
  }
  cargarSelectZonas(){
    let direccion = this.urlCargarSelectZonas
    return this.http.get(direccion)
  }
  crearNuevoLink(json: any){
    let direccion = this.urlCrearNuevoLink
    return this.http.post(direccion,json)
  }
  actualizarLink(json: any){
    let direccion = this.urlActualizarLink
    return this.http.put(direccion,json)
  }
  eliminarLink(idLink: number){
    let direccion = this.urlEliminarLink + idLink
    return this.http.delete(direccion)
  }

  //Precios Cambiados
  preciosCambiados(){
    let direccion = this.urlPreciosCambiados
    return this.http.get(direccion)
  }
  badgePreciosCambiados(){
    let direccion = this.urlBadgePreciosCambiados
    return this.http.get(direccion)
  }

  //Faqs
  cargarTablaFaqs(){
    let direccion = this.urlCargarFaqs
    return this.http.get(direccion)
  }
  crearFaq(json: any){
    let direccion = this.urlCrearFaqs
    return this.http.post(direccion, json)
  }
  actualizarFaq(json: any){
    let direccion = this.urlActualizarFaq
    return this.http.put(direccion, json)
  }
  eliminarFaq(idFaq: number){
    let direccion = this.urlEliminarFaq + idFaq
    return this.http.delete(direccion)
  }

  //Alertas Amazon
  alertasAmazon(){
    let direccion = this.urlAlertasAmazon
    return this.http.get(direccion)
  }
  countAlertasAmazon(){
    let direccion = this.urlCountAlertasAmazon
    return this.http.get(direccion)
  }

  //Pre-Almacen
  preAlmacen(){
    let direccion = this.urlPreAlamcen
    return this.http.get(direccion)
  }
  countPreAlmacen(){
    let direccion = this.urlCountPreAlmacen
    return this.http.get(direccion)
  }

  //Favoritos
  cargarTopFavoritos(){
    let direccion = this.urlCargarTopFavoritos
    return this.http.get(direccion)
  }
  cargarGraficoFavoritos(){
    let direccion = this.urlCargarGraficoFavoritos
    return this.http.get(direccion)
  }


  //Precios Fijos Makro
  cargarSelectPreciosFijos(){
    let direccion = this.urlCargarSelectPreciosFijos
    return this.http.get(direccion)
  }
  cargarTablaPreciosFijos(){
    let direccion = this.urlCargarTablaPreciosFijos
    return this.http.get(direccion)
  }
  registrarPrecioFijo(json: any){
    let direccion = this.urlRegistrarPrecioFijo
    return this.http.post(direccion,json)
  }
  eliminarPrecioFijo(id: number){
    let direccion = this.urlEliminarPrecioFijo + id
    return this.http.delete(direccion)
  }
  actualizarPrecioFijo(json: any){
    let direccion = this.urlActualizarPrecioFijo
    return this.http.put(direccion, json)
  }

  //Ventas Por Habitante
  ventasHabitantes(){
    let direccion = this.urlVentasHabitantes
    return this.http.get(direccion)
  }

  //DashBoard
  avanceSemanal(){
    let direccion = this.urlAvanceSemanal
    return this.http.get(direccion)
  }
  graficoVentas(){
    let direccion = this.urlGraficoVentas
    return this.http.get(direccion)
  }
  graficoVentasUnMes(){
    let direccion = this.urlGraficoVentasUnMes
    return this.http.get(direccion)
  }
  graficoVentasUnaSemana(){
    let direccion = this.urlGraficoVentasUnaSemana
    return this.http.get(direccion)
  }
  ventasUltimaSemana(){
    let direccion = this.urlVentasUltimaSemana
    return this.http.get(direccion)
  }
  roturaStockDashBoard(){
    let direccion = this.urlRoturaStockEnSemana
    return this.http.get(direccion)
  }
  graficoVentasPaisesHoy(){
    let direccion = this.urlGraficoVentasPaisesHoy
    return this.http.get(direccion)
  }
  graficoVentasPaisesUnaSemana(){
    let direccion = this.urlGraficoVentasPaisesUnaSemana
    return this.http.get(direccion)
  }
  graficoVentasPaisesUnMes(){
    let direccion = this.urlGraficoVentasPaisesUnMes
    return this.http.get(direccion)
  }
  graficoComparacionVentas(){
    let direccion = this.urlGraficoComparacionVentas
    return this.http.get(direccion)
  }

}
