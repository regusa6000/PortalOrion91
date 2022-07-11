import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbAlertModule,
  NbButtonModule,
  NbCalendarKitModule,
  NbCalendarModule,
  NbCalendarRangeModule,
  NbCardModule,
  NbChatModule,
  NbIconModule,
  NbProgressBarModule,
  NbSelectModule,
  NbSpinnerModule,
  NbTabsetModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { ExtraComponentsRoutingModule } from './extra-components-routing.module';

// components
import { ExtraComponentsComponent } from './extra-components.component';
import { SpinnerInTabsComponent } from './spinner/spinner-in-tabs/spinner-in-tabs.component';
import { SpinnerInButtonsComponent } from './spinner/spinner-in-buttons/spinner-in-buttons.component';
import { SpinnerSizesComponent } from './spinner/spinner-sizes/spinner-sizes.component';
import { SpinnerColorComponent } from './spinner/spinner-color/spinner-color.component';
import { SpinnerComponent } from './spinner/spinner.component';
import {
  InteractiveProgressBarComponent,
} from './progress-bar/interactive-progress-bar/interactive-progress-bar.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { AlertComponent } from './alert/alert.component';
import { ChatComponent } from './chat/chat.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DayCellComponent } from './calendar/day-cell/day-cell.component';
import { NebularFormInputsComponent } from './form-inputs/nebular-form-inputs.component';
import { NebularSelectComponent } from './form-inputs/nebular-select/nebular-select.component';
import { CalendarKitFullCalendarShowcaseComponent } from './calendar-kit/calendar-kit.component';
import { CalendarKitMonthCellComponent } from './calendar-kit/month-cell/month-cell.component';
import { AlertasOrionComponent } from './alertas-orion/alertas-orion.component';
import { PagosFraccionadosComponent } from './alertas-orion/components/pagos-fraccionados/pagos-fraccionados.component';
import { DiferenciaDePagosComponent } from './alertas-orion/components/diferencia-de-pagos/diferencia-de-pagos.component';
import { PendientesAlmacenComponent } from './alertas-orion/components/pendientes-almacen/pendientes-almacen.component';
import { PedidosMakroSinStockComponent } from './alertas-orion/components/pedidos-makro-sin-stock/pedidos-makro-sin-stock.component';
import { ErroresAliExpressComponent } from './alertas-orion/components/errores-ali-express/errores-ali-express.component';
import { CombinadosPredeterminadosSinStockComponent } from './alertas-orion/components/combinados-predeterminados-sin-stock/combinados-predeterminados-sin-stock.component';
import { CategoriasRedireccionadasComponent } from './alertas-orion/components/categorias-redireccionadas/categorias-redireccionadas.component';
import { ProductosElementorComponent } from './alertas-orion/components/productos-elementor/productos-elementor.component';
import { PreciosCambiadosComponent } from './alertas-orion/components/precios-cambiados/precios-cambiados.component';
import { AlertasAmazonComponent } from './alertas-orion/components/alertas-amazon/alertas-amazon.component';
import { PreAlmacenComponent } from './alertas-orion/components/pre-almacen/pre-almacen.component';
import { CategoriasVaciasComponent } from './alertas-orion/components/categorias-vacias/categorias-vacias.component';
import { PedidoTransferenciaBancariaComponent } from './alertas-orion/components/pedido-transferencia-bancaria/pedido-transferencia-bancaria.component';
import { ProductosSinEan13Component } from './alertas-orion/components/productos-sin-ean13/productos-sin-ean13.component';
import { PedidosEnviadosAxComponent } from './alertas-orion/components/pedidos-enviados-ax/pedidos-enviados-ax.component';
import { PedidosPendienteValidacionComponent } from './alertas-orion/components/pedidos-pendiente-validacion/pedidos-pendiente-validacion.component';
import { PedidosNoEnviadosComponent } from './alertas-orion/components/pedidos-no-enviados/pedidos-no-enviados.component';
import { CombinadosPreciosDiferentesComponent } from './alertas-orion/components/combinados-precios-diferentes/combinados-precios-diferentes.component';
import { PrecioBaseMenorAPrecioOfertaComponent } from './alertas-orion/components/precio-base-menor-aprecio-oferta/precio-base-menor-aprecio-oferta.component';
import { OrDuplicadosComponent } from './alertas-orion/components/or-duplicados/or-duplicados.component';
import { ProductosCategorizadosOuletComponent } from './alertas-orion/components/productos-categorizados-oulet/productos-categorizados-oulet.component';
import { ProductosSinCategoriaPredeterminadaComponent } from './alertas-orion/components/productos-sin-categoria-predeterminada/productos-sin-categoria-predeterminada.component';
import { ProductosSinMpNombreArticuloComponent } from './alertas-orion/components/productos-sin-mp-nombre-articulo/productos-sin-mp-nombre-articulo.component';
import { ProductosSinBulletsComponent } from './alertas-orion/components/productos-sin-bullets/productos-sin-bullets.component';

const COMPONENTS = [
  ExtraComponentsComponent,
  AlertComponent,
  ProgressBarComponent,
  InteractiveProgressBarComponent,
  SpinnerComponent,
  SpinnerColorComponent,
  SpinnerSizesComponent,
  SpinnerInButtonsComponent,
  SpinnerInTabsComponent,
  CalendarComponent,
  DayCellComponent,
  ChatComponent,
  NebularFormInputsComponent,
  NebularSelectComponent,
  CalendarKitFullCalendarShowcaseComponent,
  CalendarKitMonthCellComponent,
];

const MODULES = [
  NbAlertModule,
  NbActionsModule,
  NbButtonModule,
  NbCalendarModule,
  NbCalendarKitModule,
  NbCalendarRangeModule,
  NbCardModule,
  NbChatModule,
  NbIconModule,
  NbProgressBarModule,
  NbSelectModule,
  NbSpinnerModule,
  NbTabsetModule,
  ThemeModule,
  ExtraComponentsRoutingModule,
];

@NgModule({
  imports: [
    ...MODULES,
  ],
  declarations: [
    ...COMPONENTS,
    AlertasOrionComponent,
    PagosFraccionadosComponent,
    DiferenciaDePagosComponent,
    PendientesAlmacenComponent,
    PedidosMakroSinStockComponent,
    ErroresAliExpressComponent,
    CombinadosPredeterminadosSinStockComponent,
    CategoriasRedireccionadasComponent,
    ProductosElementorComponent,
    PreciosCambiadosComponent,
    AlertasAmazonComponent,
    PreAlmacenComponent,
    CategoriasVaciasComponent,
    PedidoTransferenciaBancariaComponent,
    ProductosSinEan13Component,
    PedidosEnviadosAxComponent,
    PedidosPendienteValidacionComponent,
    PedidosNoEnviadosComponent,
    CombinadosPreciosDiferentesComponent,
    PrecioBaseMenorAPrecioOfertaComponent,
    OrDuplicadosComponent,
    ProductosCategorizadosOuletComponent,
    ProductosSinCategoriaPredeterminadaComponent,
    ProductosSinMpNombreArticuloComponent,
    ProductosSinBulletsComponent,
  ],
})
export class ExtraComponentsModule { }
