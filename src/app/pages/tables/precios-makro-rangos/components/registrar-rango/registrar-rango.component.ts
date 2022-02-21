import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NbComponentStatus, NbToastrService } from '@nebular/theme';
import { AuthService } from '../../../../../auth/auth.service';

@Component({
  selector: 'ngx-registrar-rango',
  templateUrl: './registrar-rango.component.html',
  styleUrls: ['./registrar-rango.component.scss']
})
export class RegistrarRangoComponent implements OnInit {

  @Input() sku: any
  @Input() contadorRangos: any
  @Input() margen: any
  @Input() pmp: any
  @Input() precio: any
  @Input() precioPadre: any

  rangos: any
  descuento: any

  constructor(private authSvc: AuthService,private toastrService: NbToastrService) { }

  buscarRangos: any

  ngOnInit(): void {
  }

  previsualizarMargen(sku: any, pmp: any, descuento: any, precio: any){

    let pmpActual = pmp.substring(0, pmp.length - 1)

    //Precio
    let precioActual = precio.substring(0, precio.length - 1)
    let precioConDescuento = (precioActual / 100) * descuento
    let precioMostrar = precioActual - precioConDescuento


    let margenActual = ((precioMostrar - pmpActual)/precioMostrar)*100

    let margenMostar = Math.round(margenActual * 100) / 100;

    document.getElementById("margenCalcular-" + sku).innerHTML = ''
    document.getElementById("margenCalcular-" + sku).innerHTML = `${margenActual}`
    console.log(margenActual)
  }

  registrarRango(ean13: number, numeroRango: number, descuentoRango: number, margen: any, pmp: any, precio: any, precioPadre: any){

    let margenActual = margen.substring(0, margen.length - 1)
    let precioPs = precioPadre.substring(0, precioPadre.length - 1)
    let pmpActual = pmp.substring(0, pmp.length - 1)


    //Precios
    let precioActual = precio.substring(0, precio.length - 1)
    let precioConDescuento = (precioActual / 100) * descuentoRango
    let precioRegistrar = precioActual - precioConDescuento


    //Margen Nuevo
    let margenNuevo = ((precioRegistrar - pmpActual) / precioRegistrar) * 100


    this.authSvc.buscarListado(ean13).subscribe(data=>{

      this.buscarRangos = data

      let json = {
        'id_product': this.buscarRangos[0].id_product,
        'ean13': ean13,
        'nombreProducto': this.buscarRangos[0].name,
        'nombreAtributo': this.buscarRangos[0].name_att,
        'valorAtributo': this.buscarRangos[0].name_value_att,
        'rango': numeroRango,
        'margen': margenNuevo,
        'pmp': pmpActual,
        'precio_sin_iva': precioRegistrar,
        'porcentaje_dto': descuentoRango,
        'precioUnidadAx': precioActual,
        'precioPadre': precioPs
      }

      this.authSvc.registrarRangoMakro(json).subscribe(data=>{
        console.log('Se registro Correctamente!!!')
        this.showToast('success')
        // this.listadoRangos();
        // this.funcionesHijo.listadoRangos(this.sku)
      })
    })
  }

  showToast(status: NbComponentStatus) {
    this.toastrService.show(status, `Rango Creado!`, { status });
  }

  // listadoRangos(){
  //   this.mandarSku.emit(this.sku)
  // }

}
