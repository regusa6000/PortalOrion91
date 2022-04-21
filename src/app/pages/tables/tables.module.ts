import { NgModule } from '@angular/core';
import { NbProgressBarModule,NbCardModule, NbSpinnerModule , NbIconModule, NbInputModule, NbTreeGridModule,NbSelectModule,NbRadioModule,NbCalendarRangeModule,NbDatepickerModule,NbButtonModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TablesRoutingModule, routedComponents } from './tables-routing.module';
import { FsIconComponent } from './tree-grid/tree-grid.component';
import { DiarioPedidosComponent } from './diario-pedidos/diario-pedidos.component';
import { DiferenciaDePagoComponent } from './diferencia-de-pago/diferencia-de-pago.component';
import { PendientesAlmacenComponent } from './pendientes-almacen/pendientes-almacen.component';
import { PreCompraComponent } from './pre-compra/pre-compra.component';
import { ImagenesCleanerComponent } from './imagenes-cleaner/imagenes-cleaner.component';
import { TransportistasComponent } from './transportistas/transportistas.component';
import { PorcentajeEnviadosComponent } from './porcentaje-enviados/porcentaje-enviados.component';
import { ManoManoComponent } from './mano-mano/mano-mano.component';
import { RoturasComponent } from './roturas/roturas.component';
import { ControlMakroComponent } from './control-makro/control-makro.component';
import { PreciosMakroRangosComponent } from './precios-makro-rangos/precios-makro-rangos.component';
import { RangosMakroComponent } from './precios-makro-rangos/components/rangos-makro/rangos-makro.component';
import { RegistrarRangoComponent } from './precios-makro-rangos/components/registrar-rango/registrar-rango.component';
import { VentasProductosComponent } from './ventas-productos/ventas-productos.component';
import { ImporteDeVentasComponent } from './importe-de-ventas/importe-de-ventas.component';
import { HistoricoStockComponent } from './historico-stock/historico-stock.component';
import { CategoriasPorMesesComponent } from './categorias-por-meses/categorias-por-meses.component';
import { ProductosTopFechasComponent } from './productos-top-fechas/productos-top-fechas.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { CategoriaProductoComponent } from './categoria-producto/categoria-producto.component';
import { PosicionProductosComponent } from './categoria-producto/posicion-productos/posicion-productos.component';
import { OpinionesCrudComponent } from './opiniones-crud/opiniones-crud.component';
import { OpinionesGraficoComponent } from './opiniones-grafico/opiniones-grafico.component';
import { IncidenciasMensualesComponent } from './incidencias-mensuales/incidencias-mensuales.component';
import { CarpetaCompartidosComponent } from './carpeta-compartidos/carpeta-compartidos.component';
import { ZonasComponent } from './carpeta-compartidos/components/zonas/zonas.component';
import { ConfiguracionZonasComponent } from './configuracion-zonas/configuracion-zonas.component';
import { ConfiguracionLinksComponent } from './configuracion-links/configuracion-links.component';
import { ProductosFaqsComponent } from './productos-faqs/productos-faqs.component';
import { AmazonCaracteresComponent } from './amazon-caracteres/amazon-caracteres.component';
import { SlidersElementorComponent } from './sliders-elementor/sliders-elementor.component';
import { PreciosFijosMakroComponent } from './precios-fijos-makro/precios-fijos-makro.component';
import { DiarioPedidosTiendasComponent } from './diario-pedidos-tiendas/diario-pedidos-tiendas.component';
import { VentasPorHabitantesComponent } from './ventas-por-habitantes/ventas-por-habitantes.component';
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductosTopHoyComponent } from './dashboard/components/productos-top-hoy/productos-top-hoy.component';
import { CuadroAvanceSemanalComponent } from './dashboard/components/cuadro-avance-semanal/cuadro-avance-semanal.component';
import { GraficoVentasComponent } from './dashboard/components/grafico-ventas/grafico-ventas.component';
import { GraficoVentasUnaSemanaComponent } from './dashboard/components/grafico-ventas-una-semana/grafico-ventas-una-semana.component';
import { GraficoVentasUnMesComponent } from './dashboard/components/grafico-ventas-un-mes/grafico-ventas-un-mes.component';
import { VentasSemanalComponent } from './dashboard/components/ventas-semanal/ventas-semanal.component';
import { RoturaStockDashboardComponent } from './dashboard/components/rotura-stock-dashboard/rotura-stock-dashboard.component';
import { GraficoVentasPaisesHoyComponent } from './dashboard/components/grafico-ventas-paises-hoy/grafico-ventas-paises-hoy.component';
import { GraficoVentasPaisesUnaSemanaComponent } from './dashboard/components/grafico-ventas-paises-una-semana/grafico-ventas-paises-una-semana.component';
import { GraficoVentasPaisesUnMesComponent } from './dashboard/components/grafico-ventas-paises-un-mes/grafico-ventas-paises-un-mes.component';
import { GraficoComparacionVentasComponent } from './dashboard/components/grafico-comparacion-ventas/grafico-comparacion-ventas.component';
import { ProductosTopCanalesComponent } from './productos-top-canales/productos-top-canales.component';
import { HistoricoAxComponent } from './historico-ax/historico-ax.component';
import { IncidenciasComponent } from './historico-ax/components/incidencias/incidencias.component';
import { PvcAxComponent } from './historico-ax/components/pvc-ax/pvc-ax.component';
import { TransportistaComponent } from './historico-ax/components/transportista/transportista.component';
import { PropuestaComponent } from './propuesta/propuesta.component';
import { ProductoNoPublicadosAmazonComponent } from './producto-no-publicados-amazon/producto-no-publicados-amazon.component';
import { BuscadorDeProductosComponent } from './buscador-de-productos/buscador-de-productos.component';
import { AmazonNoPublicadoComponent } from './amazon-no-publicado/amazon-no-publicado.component';
import { ProductoConPocasImagenesComponent } from './producto-con-pocas-imagenes/producto-con-pocas-imagenes.component';

// import { NbCalendarRangeModule } from '.'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NbRadioModule,
    NbSelectModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
    NbCalendarRangeModule,
    NbDatepickerModule,
    NbProgressBarModule,
    NbButtonModule,
    NbSpinnerModule,
    NgxEchartsModule,
    LeafletModule.forRoot()
  ],
  declarations: [
    ...routedComponents,
    FsIconComponent,
    DiarioPedidosComponent,
    DiferenciaDePagoComponent,
    PendientesAlmacenComponent,
    PreCompraComponent,
    ImagenesCleanerComponent,
    TransportistasComponent,
    PorcentajeEnviadosComponent,
    ManoManoComponent,
    RoturasComponent,
    ControlMakroComponent,
    PreciosMakroRangosComponent,
    RangosMakroComponent,
    RegistrarRangoComponent,
    VentasProductosComponent,
    ImporteDeVentasComponent,
    HistoricoStockComponent,
    CategoriasPorMesesComponent,
    ProductosTopFechasComponent,
    FavoritosComponent,
    CategoriaProductoComponent,
    PosicionProductosComponent,
    OpinionesCrudComponent,
    OpinionesGraficoComponent,
    IncidenciasMensualesComponent,
    CarpetaCompartidosComponent,
    ZonasComponent,
    ConfiguracionZonasComponent,
    ConfiguracionLinksComponent,
    ProductosFaqsComponent,
    AmazonCaracteresComponent,
    SlidersElementorComponent,
    PreciosFijosMakroComponent,
    DiarioPedidosTiendasComponent,
    VentasPorHabitantesComponent,
    DashboardComponent,
    ProductosTopHoyComponent,
    CuadroAvanceSemanalComponent,
    GraficoVentasComponent,
    GraficoVentasUnaSemanaComponent,
    GraficoVentasUnMesComponent,
    VentasSemanalComponent,
    RoturaStockDashboardComponent,
    GraficoVentasPaisesHoyComponent,
    GraficoVentasPaisesUnaSemanaComponent,
    GraficoVentasPaisesUnMesComponent,
    GraficoComparacionVentasComponent,
    ProductosTopCanalesComponent,
    HistoricoAxComponent,
    IncidenciasComponent,
    PvcAxComponent,
    TransportistaComponent,
    PropuestaComponent,
    ProductoNoPublicadosAmazonComponent,
    BuscadorDeProductosComponent,
    AmazonNoPublicadoComponent,
    ProductoConPocasImagenesComponent,
  ],
})
export class TablesModule { }
