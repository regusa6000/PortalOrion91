import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './tables.component';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { TreeGridComponent } from './tree-grid/tree-grid.component';
import { DiarioPedidosComponent } from './diario-pedidos/diario-pedidos.component';
import { DiferenciaDePagoComponent } from './diferencia-de-pago/diferencia-de-pago.component';
import { PendientesAlmacenComponent } from './pendientes-almacen/pendientes-almacen.component';
import { PreCompraComponent } from './pre-compra/pre-compra.component';
import { TransportistasComponent } from './transportistas/transportistas.component';
import { PorcentajeEnviadosComponent } from './porcentaje-enviados/porcentaje-enviados.component';
import { ImagenesCleanerComponent } from './imagenes-cleaner/imagenes-cleaner.component';
import { ManoManoComponent } from './mano-mano/mano-mano.component';
import { RoturasComponent } from './roturas/roturas.component';
import { ControlMakroComponent } from './control-makro/control-makro.component';
import { PreciosMakroRangosComponent } from './precios-makro-rangos/precios-makro-rangos.component';
import { VentasProductosComponent } from './ventas-productos/ventas-productos.component';
import { ImporteDeVentasComponent } from './importe-de-ventas/importe-de-ventas.component';
import { HistoricoStockComponent } from './historico-stock/historico-stock.component';
import { CategoriasPorMesesComponent } from './categorias-por-meses/categorias-por-meses.component';
import { ProductosTopFechasComponent } from './productos-top-fechas/productos-top-fechas.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { CategoriaProductoComponent } from './categoria-producto/categoria-producto.component';
import { OpinionesCrudComponent } from './opiniones-crud/opiniones-crud.component';
import { OpinionesGraficoComponent } from './opiniones-grafico/opiniones-grafico.component';
import { IncidenciasMensualesComponent } from './incidencias-mensuales/incidencias-mensuales.component';
import { CarpetaCompartidosComponent } from './carpeta-compartidos/carpeta-compartidos.component';
import { ConfiguracionZonasComponent } from './configuracion-zonas/configuracion-zonas.component';
import { ConfiguracionLinksComponent } from './configuracion-links/configuracion-links.component';
import { ProductosFaqsComponent } from './productos-faqs/productos-faqs.component';
import { AmazonCaracteresComponent } from './amazon-caracteres/amazon-caracteres.component';
import { SlidersElementorComponent } from './sliders-elementor/sliders-elementor.component';
import { PreciosFijosMakroComponent } from './precios-fijos-makro/precios-fijos-makro.component';
import { DiarioPedidosTiendasComponent } from './diario-pedidos-tiendas/diario-pedidos-tiendas.component';
import { VentasPorHabitantesComponent } from './ventas-por-habitantes/ventas-por-habitantes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductosTopCanalesComponent } from './productos-top-canales/productos-top-canales.component';
import { HistoricoAxComponent } from './historico-ax/historico-ax.component';
import { PropuestaComponent } from './propuesta/propuesta.component';
import { ProductoNoPublicadosAmazonComponent } from './producto-no-publicados-amazon/producto-no-publicados-amazon.component';
import { BuscadorDeProductosComponent } from './buscador-de-productos/buscador-de-productos.component';
import { AmazonNoPublicadoComponent } from './amazon-no-publicado/amazon-no-publicado.component';
import { ProductoConPocasImagenesComponent } from './producto-con-pocas-imagenes/producto-con-pocas-imagenes.component';
import { RegistroNoticiasComponent } from './registro-noticias/registro-noticias.component';
import { ListadoNoticiasComponent } from './listado-noticias/listado-noticias.component';
import { RegistroDocumentosComponent } from './registro-documentos/registro-documentos.component';
import { AbonosComponent } from './abonos/abonos.component';
import { ContrasenasPlataformasComponent } from './contrasenas-plataformas/contrasenas-plataformas.component';
import { AbonosIncidenciasMotivosComponent } from './abonos-incidencias-motivos/abonos-incidencias-motivos.component';
import { AbonosAgenciaTransporteComponent } from './abonos-agencia-transporte/abonos-agencia-transporte.component';
import { RegistroPedidosPreAlmacenComponent } from './registro-pedidos-pre-almacen/registro-pedidos-pre-almacen.component';
import { AbonosCanalesComponent } from './abonos-canales/abonos-canales.component';
import { VentasPorProductoComponent } from './ventas-por-producto/ventas-por-producto.component';
import { AbonosProductosComponent } from './abonos-productos/abonos-productos.component';
import { CuponesDescuentosComponent } from './cupones-descuentos/cupones-descuentos.component';
import { RoturasActualesComponent } from './roturas-actuales/roturas-actuales.component';
import { ProductosSinBulletsComponent } from './productos-sin-bullets/productos-sin-bullets.component';
import { CategoriasFaqsComponent } from './categorias-faqs/categorias-faqs.component';
import { ControlUsuariosComponent } from './control-usuarios/control-usuarios.component';
import { ProductosSinEan13ConStockComponent } from './productos-sin-ean13-con-stock/productos-sin-ean13-con-stock.component';
import { ProductosSinMpComponent } from './productos-sin-mp/productos-sin-mp.component';
import { CategoriasSinFacetasComponent } from './categorias-sin-facetas/categorias-sin-facetas.component';
import { FacturasAxComponent } from './facturas-ax/facturas-ax.component';
import { DevolucionesComponent } from './devoluciones/devoluciones.component';
import { Novedades100DiasComponent } from './novedades100-dias/novedades100-dias.component';
import { NoMapeadosAliExpressComponent } from './no-mapeados-ali-express/no-mapeados-ali-express.component';
import { PedidosVendorComponent } from './pedidos-vendor/pedidos-vendor.component';
import { ProductosNombreMpComponent } from './productos-nombre-mp/productos-nombre-mp.component';
import { PedidosEliminadosComponent } from './pedidos-eliminados/pedidos-eliminados.component';

const routes: Routes = [{
  path: '',
  component: TablesComponent,
  children: [
    {
      path: 'smart-table',
      component: SmartTableComponent,
    },
    {
      path: 'tree-grid',
      component: TreeGridComponent,
    },
    {
      path: 'diario-pedidos',
      component: DiarioPedidosComponent
    },
    {
      path: 'diario-pedidos-tiendas',
      component: DiarioPedidosTiendasComponent
    },
    {
      path: 'diferencia-de-pago',
      component: DiferenciaDePagoComponent
    },
    {
      path: 'pendientes-almacen',
      component: PendientesAlmacenComponent
    },
    {
      path: 'pre-compra',
      component: PreCompraComponent
    },
    {
      path: 'imagenes-cleaner',
      component: ImagenesCleanerComponent
    },
    {
      path: 'porcentaje-enviados',
      component: PorcentajeEnviadosComponent
    },
    {
      path: 'transportistas',
      component: TransportistasComponent
    },
    {
      path: 'mano-mano',
      component: ManoManoComponent
    },
    {
      path: 'roturas',
      component: RoturasComponent
    },
    {
      path: 'control-makro',
      component: ControlMakroComponent
    },
    {
      path: 'precios-makro-rangos',
      component: PreciosMakroRangosComponent
    },
    {
      path: 'ventas-productos',
      component: VentasProductosComponent
    },
    {
      path: 'importe-de-ventas',
      component: ImporteDeVentasComponent
    },
    {
      path: 'historico-stock',
      component: HistoricoStockComponent
    },
    {
      path: 'categorias-por-meses',
      component: CategoriasPorMesesComponent
    },
    {
      path: 'productos-top-fechas',
      component: ProductosTopFechasComponent
    },
    {
      path: 'favoritos',
      component: FavoritosComponent
    },
    {
      path: 'categoria-producto',
      component: CategoriaProductoComponent
    },
    {
      path: 'opiniones-crud',
      component: OpinionesCrudComponent
    },
    {
      path: 'opiniones-grafico',
      component: OpinionesGraficoComponent
    },
    {
      path: 'incidencias-mensuales',
      component: IncidenciasMensualesComponent
    },
    {
      path: 'carpeta-compartidos',
      component: CarpetaCompartidosComponent
    },
    {
      path: 'configuracion-zonas',
      component: ConfiguracionZonasComponent
    },
    {
      path: 'configuracion-links',
      component: ConfiguracionLinksComponent
    },
    {
      path: 'productos-faqs',
      component: ProductosFaqsComponent
    },
    {
      path: 'amazon-caracteres',
      component: AmazonCaracteresComponent
    },
    {
      path: 'sliders-elementor',
      component: SlidersElementorComponent
    },
    {
      path: 'precios-fijos-makro',
      component: PreciosFijosMakroComponent
    },
    {
      path: 'ventas-por-habitantes',
      component: VentasPorHabitantesComponent
    },
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: 'productos-top-canales',
      component: ProductosTopCanalesComponent
    },
    {
      path: 'historico-ax',
      component: HistoricoAxComponent
    },
    {
      path: 'propuesta',
      component: PropuestaComponent
    },
    {
      path: 'productos-no-publicados-amazon',
      component: ProductoNoPublicadosAmazonComponent
    },
    {
      path: 'buscador-de-productos',
      component: BuscadorDeProductosComponent
    },
    {
      path: 'amazon-no-publicado',
      component: AmazonNoPublicadoComponent
    },
    {
      path: 'productos-con-pocas-imagenes',
      component: ProductoConPocasImagenesComponent
    },
    {
      path: 'registro-noticias',
      component: RegistroNoticiasComponent
    },
    {
      path: 'listado-noticias',
      component: ListadoNoticiasComponent
    },
    {
      path: 'registro-documentos',
      component: RegistroDocumentosComponent
    },
    {
      path: 'abonos',
      component: AbonosComponent
    },
    {
      path: 'contrasenas-plataformas',
      component: ContrasenasPlataformasComponent
    },
    {
      path: 'abonos-incidencias-motivos',
      component: AbonosIncidenciasMotivosComponent
    },
    {
      path: 'abonos-agencia-transporte',
      component: AbonosAgenciaTransporteComponent
    },
    {
      path: 'registro-pedidos-pre-almacen',
      component: RegistroPedidosPreAlmacenComponent
    },
    {
      path: 'abonos-canales',
      component: AbonosCanalesComponent
    },
    {
      path: 'ventas-por-producto',
      component: VentasPorProductoComponent
    },
    {
      path: 'abonos-productos',
      component: AbonosProductosComponent
    },
    {
      path: 'cupones-descuentos',
      component: CuponesDescuentosComponent
    },
    {
      path: 'roturas-actuales',
      component: RoturasActualesComponent
    },
    {
      path: 'productos-sin-bullets',
      component: ProductosSinBulletsComponent
    },
    {
      path: 'categorias-faqs',
      component: CategoriasFaqsComponent
    },
    {
      path: 'control-usuarios',
      component: ControlUsuariosComponent
    },
    {
      path: 'productos-sin-ean13-con-stock',
      component: ProductosSinEan13ConStockComponent
    },
    {
      path: 'productos-sin-mp',
      component: ProductosSinMpComponent
    },
    {
      path: 'categorias-sin-facetas',
      component: CategoriasSinFacetasComponent
    },
    {
      path: 'facturas-ax',
      component: FacturasAxComponent
    },
    {
      path: 'devoluciones',
      component: DevolucionesComponent
    },
    {
      path: 'novedades100-dias',
      component: Novedades100DiasComponent
    },
    {
      path: 'no-mapeados-ali-express',
      component: NoMapeadosAliExpressComponent
    },
    {
      path: 'pedidos-vendor',
      component: PedidosVendorComponent
    },
    {
      path: 'productos-nombre-mp',
      component: ProductosNombreMpComponent
    },
    {
      path: 'pedidos-eliminados',
      component: PedidosEliminadosComponent
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  TablesComponent,
  SmartTableComponent,
  TreeGridComponent,
  DiarioPedidosComponent,
  DiferenciaDePagoComponent,
  PendientesAlmacenComponent,
  PreCompraComponent,
  VentasProductosComponent
];
