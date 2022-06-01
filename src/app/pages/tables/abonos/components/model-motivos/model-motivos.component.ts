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
  idUsuario: number

  constructor(public authSvc: AuthService ,private toastrService: NbToastrService, private dialogService: NbDialogRef<any>) {
    let datosUsuario = localStorage.getItem('auth_app_token')
    console.log('LocalStorage')
    let valoresUsuario = JSON.parse(datosUsuario)
    console.log(valoresUsuario)

    let idUsuario = valoresUsuario.value[0]['id_user']
    this.idUsuario = idUsuario
   }

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
      'idUsuario': this.idUsuario,
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

      if(data == true){
        this.showToastRegister('success')
        this.dialogService.close()
      }else{
        if(data == 1){
          this.showToast('success')
          this.dialogService.close()
        }else{
          this.showToastErrorDatos('danger')
        }
      }

      console.log(data)

    })

  }

  showToastRegister(status: NbComponentStatus) {
    this.toastrService.show(status, `Guardado  Correctamente!`, { status });
  }

  showToastErrorDatos(status: NbComponentStatus) {
    this.toastrService.show(status, `Error de Datos!`, { status });
  }

  showToast(status: NbComponentStatus) {
    this.toastrService.show(status, `Guardado Actualizado!`, { status });
  }

}
