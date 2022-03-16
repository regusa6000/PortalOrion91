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
