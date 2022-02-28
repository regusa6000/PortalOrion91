import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule,NbSelectModule,NbRadioModule,NbCalendarRangeModule,NbDatepickerModule,NbButtonModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

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
    NbButtonModule
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
  ],
})
export class TablesModule { }
