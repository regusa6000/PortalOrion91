import { Component, Input, OnInit } from '@angular/core';
import { NbComponentStatus, NbToastrService } from '@nebular/theme';
import { AuthService } from '../../../../../auth/auth.service';

@Component({
  selector: 'ngx-rangos-makro',
  templateUrl: './rangos-makro.component.html',
  styleUrls: ['./rangos-makro.component.scss']
})
export class RangosMakroComponent implements OnInit {

  rangosProductos: any
  editarPorcentaje = []

  @Input() sku: any
  @Input() contadorRangos: any
  @Input() margen: any
  @Input() pmp: any
  @Input() precio: any
  @Input() precioPadre: any

  hideme = [];
  formulario = [];
  Index: any;
  indice: any

  rangos: any
  descuento: any
  buscarRangos: any


  constructor(private authSvc: AuthService,private toastrService: NbToastrService) {}

  ngOnInit(): void {
    if(this.contadorRangos > 0){
      this.authSvc.listaDeRangosMakroPorEan13(this.sku).subscribe(data=>{
        this.rangosProductos = data
        console.log(this.rangosProductos)
      })
    }

  }

  editar(idProduct: number, ean13: number,rango: number,precio: any, descuento: number){

    console.log(descuento)
    console.log("Precio Actual -> " + precio)

    let precioActual = precio.substring(0, precio.length - 1)

    let precioConDescuento = (precioActual / 100) * descuento
    let precioActualizar = precioActual - precioConDescuento
    console.log("Descuento -> " + precioConDescuento)
    console.log("Nuevo Precio -> " + precioActualizar)

    let json = {'ean13': ean13 , 'rango': rango , 'descuento': descuento, 'precio': precioActualizar}
    console.log(json)

      this.authSvc.actualizarRangoMakro(json).subscribe(res=>{
          console.log(json)
          console.log('Se actualizo!!!')
          this.showToast('success')
        })

      this.authSvc.listaDeRangosMakroPorEan13(ean13).subscribe(data=>{
        this.ngOnInit()
      })

    this.editarPorcentaje = []

  }

  showToast(status: NbComponentStatus) {
    this.toastrService.show(status, `Rango Actualizado!`, { status });
  }

  showToastRegister(status: NbComponentStatus) {
    this.toastrService.show(status, `Rango Creado!`, { status });
  }

  showToastEliminar(status: NbComponentStatus) {
    this.toastrService.show(status, `Rango Eliminado!`, { status });
  }

  eliminarRango(ean13: number, rango: number){

    this.authSvc.eliminarRango(ean13,rango).subscribe(data=>{
      console.log('Se elimino correctamente!')
      this.showToastEliminar('warning')
      this.authSvc.listaDeRangosMakroPorEan13(ean13).subscribe(data=>{
        this.ngOnInit()
      })

    })
  }

  actualizarTablaRangos(ean13: number){
    this.authSvc.listaDeRangosMakroPorEan13(ean13).subscribe(data=>{
      this.rangosProductos = data
      console.log(this.rangosProductos)
    })
  }

  listadoRangos(ean13: number){
    if(this.contadorRangos > 0){
      this.authSvc.listaDeRangosMakroPorEan13(ean13).subscribe(data=>{
        this.rangosProductos = data
        console.log(this.rangosProductos)
      })
    }

  }

}
