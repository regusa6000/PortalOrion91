import { Component, Input, OnInit } from '@angular/core';
import { NbComponentStatus, NbDialogRef, NbDialogService, NbToastrService } from '@nebular/theme';
import { AuthService } from '../../../../../auth/auth.service';

@Component({
  selector: 'ngx-model-motivos',
  templateUrl: './model-motivos.component.html',
  styleUrls: ['./model-motivos.component.scss']
})
export class ModelMotivosComponent implements OnInit {

  @Input() orPedido: any
  @Input() idFactura: any
  @Input() pedidoAx: any
  @Input() idProduct: any
  @Input() nombreProducto: any
  @Input() cantidadVendida: any
  @Input() precioFinal: any
  @Input() imagen: any
  @Input() idLineaAbono: any

  motivoSelect: any
  subMotivoSelect: any
  motivoSeleccionado: number
  subMotivoSeleccionado:number

  constructor(public authSvc: AuthService ,private toastrService: NbToastrService, private dialogService: NbDialogRef<any>) { }

  ngOnInit(): void {
    this.authSvc.cargarSelectMotivos().subscribe(data=>{
      this.motivoSelect = data
    })
  }

  motivo(event){
    this.motivoSeleccionado = event
    this.authSvc.cargarSelectSubMotivo(this.motivoSeleccionado).subscribe(data=>{
      this.subMotivoSelect = data
    })
  }

  submotivo(event){
      this.subMotivoSeleccionado = event
  }

  registrarMotivo(){
    let json = {
      'referenciaPs': this.orPedido,
      'idAbonoLinea': this.idLineaAbono,
      'pedidoAx': this.pedidoAx,
      'idFactura': this.idFactura,
      'idMotivo': this.motivoSeleccionado,
      'idSubMotivo': this.subMotivoSeleccionado,
      'idProducto': this.idProduct,
      'nombreProducto': this.nombreProducto,
      'cantidadVendida': this.cantidadVendida,
      'precioFinal': this.precioFinal
    }

    this.authSvc.registrarMotivos(json).subscribe(data=>{
      if(data == 1){
        this.showToastRegister('success')
        this.dialogService.close()
      }else{
        this.showToastErrorDatos('danger')
      }
    })

  }

  showToastRegister(status: NbComponentStatus) {
    this.toastrService.show(status, `Registro Creado!`, { status });
  }

  showToastErrorDatos(status: NbComponentStatus) {
    this.toastrService.show(status, `Error de Datos!`, { status });
  }

}
