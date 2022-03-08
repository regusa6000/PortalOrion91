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


  urlVentasSemanales: string = 'http://192.168.30.148:8000/ventasSemanalesTiendas';

  //Badges
  urlControlPedidosPagadosBadge: string = 'http://192.168.30.148:8000/controlPedidosPagadosBadge';
  urlControlPedidosAlmacenBadge: string = 'http://192.168.30.148:8000/pedidosAlmacenBadge';
  urlBadgePagosFraccionados: string = 'http://192.168.30.148:8000/badgePedidosFraccionados';
  urlBadgePedidosSinStockMakro: string = 'http://192.168.30.148:8000/badgepedidosSinStockMakro';
  urlBadgeAliexpress: string = 'http://192.168.30.148:8000/badgeAliExpress';
  urlCombinadosPredeterminadosSinStockBadge: string = 'http://192.168.30.148:8000/CombinadospredeterminadosSinStockCount';
  urlControlManoManoBadge: string = 'http://192.168.30.148:8000/controlManoManoBadge';

  //Alertas
  urlPagosFraccionados: string = 'http://192.168.30.148:8000/pedidosFraccionados';
  urlControlPedidosPagados: string = 'http://192.168.30.148:8000/controlPedidosPagados';
  urlControlPedidosAlmacen: string = 'http://192.168.30.148:8000/controlPedidosAlmacen';
  urlControlPreCompra: string = 'http://192.168.30.148:8000/controlPreCompras';
  urlPedidosSinStockMakro: string = 'http://192.168.30.148:8000/pedidosSinStockMakro';
  urlControlAliexpress: string = 'http://192.168.30.148:8000/controlAliExpress';
  urlCombinadosPredeterminadosSinStock: string = 'http://192.168.30.148:8000/CombinadospredeterminadosSinStock';

  //Envios
  urlControlTransportistas: string = 'http://192.168.30.148:8000/controlTransportistas';
  urlCargarComboName: string = 'http://192.168.30.148:8000/cargarComboName';
  urlControlTransportistasName: string = 'http://192.168.30.148:8000/controlTransportistasName/';
  urlPorcentajeTransportistas: string = 'http://192.168.30.148:8000/porcentajeTransportistas';

  //Imagenes
  urlImagenes: string = 'http://192.168.30.148:8000/imagenes';

  //Control ManoMano
  urlControlManoAMano: string = 'http://192.168.30.148:8000/manoAmano';
  urlControlManoAManoPorId: string = 'http://192.168.30.148:8000/manoAmano/';
  urlManoManoDistinto: string = 'http://192.168.30.148:8000/manoAManoDivision';
  urlManoManoPrimero: string = 'http://192.168.30.148:8000/manoAmanoPorPrimero';
  urlManoManoSegundo: string = 'http://192.168.30.148:8000/manoAmanoPorSegundo';
  urlManoManoTercero: string = 'http://192.168.30.148:8000/manoAmanoPorTercero';
  urlManoManoCuarto: string = 'http://192.168.30.148:8000/manoAmanoPorCuarto';
  urlManoManoSexto: string = 'http://192.168.30.148:8000/manoAmanoPorSexto';
  urlManoManoSeptimo: string = 'http://192.168.30.148:8000/manoAmanoPorSeptimo';
  urlManoManoOctavo: string = 'http://192.168.30.148:8000/manoAmanoPorOctavo';

  //Roturas Stock
  urlRoturaStock: string = 'http://192.168.30.148:8000/roturaStock';

  //Rutas de Makro
  urlMakroTodosLosProductos: string = 'http://192.168.30.148:8000/productosTotalesMakro';
  urlMakroOffersPublicados: string = 'http://192.168.30.148:8000/offersPublicados';
  urlMakroOffersNoPublicados: string = 'http://192.168.30.148:8000/offerNoPublicados';

  //Rutas de Rango de Precios de Makro
  urlTotalDeProductosRangoMakro: string = 'http://192.168.30.148:8000/productosPublicadosMakro';
  urlListaDeRangosMakroPorEan13: string = 'http://192.168.30.148:8000/listaDeRangosMakro/';
  urlActualizarRangosMakro: string = 'http://192.168.30.148:8000/actualizarRango';
  urlBuscarListado: string = 'http://192.168.30.148:8000/buscarListado/';
  urlRegistrarNuevoRango: string = 'http://192.168.30.148:8000/registrarRangoMakro';
  urlEliminarRango: string = 'http://192.168.30.148:8000/eliminarRango/';

  //Rutas de Rango de Precios de Makro Select
  urlProductosPublicadosMakroConRangoYConStock: string = 'http://192.168.30.148:8000/productosPublicadosMakroConRangoYConStock';
  urlProductosPublicadosMakroConRangoYSinStock: string = 'http://192.168.30.148:8000/productosPublicadosMakroConRangoYSinStock';
  urlProductosPublicadosMakroSinRangoYConStock: string = 'http://192.168.30.148:8000/productosPublicadosMakroSinRangoYConStock';
  urlProductosPublicadosMakroSinRangoYSinStock: string = 'http://192.168.30.148:8000/productosPublicadosMakroSinRangoYSinStock';

  //PruebaRangos
  urlPruebaMakro: string = 'http://192.168.30.148:8000/pruebaRangos';


  //Categorias Redireccionadas
  urlCategoriasRedireccionadas: string = 'http://192.168.30.148:8000/categoriasRedireccionadas';
  urlCountCategoriasRedireccionadas: string = 'http://192.168.30.148:8000/countCategoriasRedireccionadas'

  //Rutas Ventas Productos
  urlVentaProductos: string = 'http://192.168.30.148:8000/ventaProductos/';

  //Sumatorias por Semana
  urlSumatoriaPorSemana: string = 'http://192.168.30.148:8000/sumatoriaPorSemana';
  urlSumatoriaPorSemanaOrion91: string = 'http://192.168.30.148:8000/sumatoriaOrion';
  urlSumatoriaPorSemanaManoMano: string = 'http://192.168.30.148:8000/sumatoriaManoMano';
  urlSumatorioPorSemanaCarrefour: string = 'http://192.168.30.148:8000/sumatorioCarrefour';
  urlSumatorioPorSemanaAliExpress: string = 'http://192.168.30.148:8000/sumatorioAliExpress';
  urlSumatorioPorSemanaAmazon: string = 'http://192.168.30.148:8000/sumatoriaAmazon';
  urlSumatorioPorSemanaGrupon: string = 'http://192.168.30.148:8000/sumatorioGrupon';
  urlSumatorioPorSemanaEmbargos: string = 'http://192.168.30.148:8000/sumatorioEmbargos';
  urlSumatorioPorSemanaMequedoUno: string = 'http://192.168.30.148:8000/sumatorioMequedoUno';
  urlSumatorioPorSemanaFnac: string = 'http://192.168.30.148:8000/sumatorioFnac';
  urlSumatorioPorSemanaWish: string = 'http://192.168.30.148:8000/sumatorioWish';
  urlSumatorioPorSemanaMakro: string = 'http://192.168.30.148:8000/sumatorioMakro';
  urlSumatorioPorSemanaPcComponentes: string = 'http://192.168.30.148:8000/sumatorioPcComponenetes';
  urlSumatorioPorSemanaSprinter: string = 'http://192.168.30.148:8000/sumatorioSprinter';
  urlSumatorioPorSemanaBulevip:string = 'http://192.168.30.148:8000/sumatorioBulevip';

  //Rutas de Estadisticas
  urlImporteDeVentas: string = 'http://192.168.30.148:8000/importeDeVentas';
  urlImporteDeVentasManoMano: string = 'http://192.168.30.148:8000/importeDeVentasManoMano';
  urlImporteDeVentasCarrefour: string = 'http://192.168.30.148:8000/importeDeVentasCarrefour';
  urlImporteDeVentasAliExpress: string = 'http://192.168.30.148:8000/importeDeVentasAliExpress';
  urlImporteDeVentasAmazon: string = 'http://192.168.30.148:8000/importeDeVentasAmazon';
  urlImporteDeVentasGroupon: string = 'http://192.168.30.148:8000/importeDeVentasGroupon';
  urlImporteDeVentasEmbargos: string = 'http://192.168.30.148:8000/importeDeVentasEmbargos';
  urlImporteDeVentasMequedoUno: string = 'http://192.168.30.148:8000/importeDeVentasMequedoUno';
  urlImporteDeVentasFnac: string = 'http://192.168.30.148:8000/importeDeVentasFnac';
  urlImporteDeVentasWish: string = 'http://192.168.30.148:8000/importeDeVentasWish';
  urlImporteDeVentasMakro: string = 'http://192.168.30.148:8000/importeDeVentasMakro';
  urlImporteDeVetasPcComponentes: string = 'http://192.168.30.148:8000/importeDeVentasPcComponentes';
  urlImporteDeVentasSprinter: string = 'http://192.168.30.148:8000/importeDeVentasSprinter';
  urlImporteDeVentasBulevip: string = 'http://192.168.30.148:8000/importeDeVentasBulevip';

  //Rutas de Historico de Stock
  urlGraficoIdProducto: string = 'http://192.168.30.148:8000/controlStockGraficoIdProducto/';
  urlControlHistoricoStock: string = 'http://192.168.30.148:8000/controlHistoricoStock/';

  //Rutas Ventas Categorias
  urlCategoriasPorMeses: string  = 'http://192.168.30.148:8000/categoriasPorMeses';
  urlCategoriasGeneral: string = 'http://192.168.30.148:8000/categoriasGeneral';
  urlIdCategoriaPorMeses: string = 'http://192.168.30.148:8000/categoriaIdPorMeses/';
  urlCategoriasIdPorMesesPorTienda: string = 'http://192.168.30.148:8000/categoriaIdPorMesesPorTienda/';
  urlCategoriaPorTiendaOrionPorIdCategoria: string = 'http://192.168.30.148:8000/categoriaPorTiendaOrionPorIdCategoria/';
  urlCategoriaPorTiendaWishPorIdCategoria: string = 'http://192.168.30.148:8000/categoriaPorTiendaWishPorIdCategoria/';
  urlCategoriasPorTienda: string = 'http://192.168.30.148:8000/categoriasPorTiendas/';
  urlCategoriasPorTiendaOrion: string = 'http://192.168.30.148:8000/categoriasPorTiendaOrion';
  urlCategoriasPorTiendaWish: string = 'http://192.168.30.148:8000/categoriasPorTiendaWish';

  //Productos top entre fechas
  urlProductosTopEntreFechas: string = 'http://192.168.30.148:8000/productosTopEntreFechas';

  //Productos por categoria
  urlCategoriaProductosName: string = 'http://192.168.30.148:8000/categoriasProductosName'
  urlproductosPorIdCategoria: string = 'http://192.168.30.148:8000/productosPorIdCategoria/';
  urlActualizarProducto: string = 'http://192.168.30.148:8000/actualizarPosicionProducto/';

  //Grafico Categorias
  urlGraficoCategorias: string = 'http://192.168.30.148:8000/arbolCategorias';


  //Opiniones
  urlListadoCanales: string = 'http://192.168.30.148:8000/listadoCanales';
  urlListadoGeneralOpiniones: string = 'http://192.168.30.148:8000/listadoGeneral';
  urlBaseTipoOpinion: string = 'http://192.168.30.148:8000/baseTipoOpinion/';
  urlRegistrarPorcentaje: string = 'http://192.168.30.148:8000/registrarPorcentaje'
  urlActualizarRegistroPorcentaje: string = 'http://192.168.30.148:8000/actualizarPorcentaje';
  urlEliminarRegistroPorcentaje: string = 'http://192.168.30.148:8000/eliminarPorcentaje/';
  urlSelectOpiniones: string = 'http://192.168.30.148:8000/rellenarSelect';
  urlGraficoOpiniones: string = 'http://192.168.30.148:8000/cargarGrafico/';


  //Incidencias
  urlIncidenciasMensuales: string = 'http://192.168.30.148:8000/productosTopIncidenciasMensual';


  //Zonas
  urlCargarZonas: string = 'http://192.168.30.148:8000/cargarZonas';
  urlCargarLinkPorIdZona: string = 'http://192.168.30.148:8000/cargarLinksPorZonas/';
  urlCrearNuevaZona: string = 'http://192.168.30.148:8000/crearNuevaZona';
  urlActualizarZona: string = 'http://192.168.30.148:8000/actualizarDatosZona'
  urlCargarLinks: string = 'http://192.168.30.148:8000/cargarLinks';
  urlCargarSelectZonas: string = 'http://192.168.30.148:8000/cargarSelectZonas';
  urlCrearNuevoLink: string = 'http://192.168.30.148:8000/crearNuevoLink';
  urlActualizarLink: string = 'http://192.168.30.148:8000/actualizarLink';
  urlEliminarLink: string = 'http://192.168.30.148:8000/eliminarLink/';


  public loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {}

  get isLogged(): Observable<boolean>{
    return this.loggedIn.asObservable();
  }

  //Parte del Login
    login(authData: User): Observable<UserResponse | void> {
      return this.http
      .post<UserResponse>('http://192.168.30.148:8000/login/', authData)
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

}
