import { Component, OnInit } from '@angular/core';
import { NbComponentStatus, NbToastrService } from '@nebular/theme';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'ngx-propuesta',
  templateUrl: './propuesta.component.html',
  styleUrls: ['./propuesta.component.scss']
})
export class PropuestaComponent implements OnInit {

  source: any
  myConfigs: any
  listado = []
  meses = [{value: 'ENERO', title: 'ENERO'},{value: 'FEBRERO', title: 'FEBRERO'},{value: 'MARZO', title: 'MARZO'},{value: 'ABRIL', title: 'ABRIL'},{value: 'MAYO', title: 'MAYO'},{value: 'JUNIO', title: 'JUNIO'},
          {value: 'JULIO', title: 'JULIO'},{value: 'AGOSTO', title: 'AGOSTO'},{value: 'SEPTIEMBRE', title: 'SEPTIEMBRE'},{value: 'OCTUBRE', title: 'OCTUBRE'},{value: 'NOVIEMBRE', title: 'NOVIEMBRE'},{value: 'DICIEMBRE', title: 'DICIEMBRE'}]

  estados = [{value: 'Aceptado', title: 'Aceptado'},{value: 'Pendiente', title: 'Pendiente'},{value: 'Rechazado',title: 'Rechazado'}]

  constructor(public authSvc: AuthService,private toastrService: NbToastrService) {

      this.myConfigs = this.config
      this.myConfigs.columns.mes.editor.config.list = this.meses
      this.myConfigs.columns.estado.editor.config.list = this.estados
      this.config = Object.assign({}, this.myConfigs)

   }

  ngOnInit(): void {
    this.authSvc.vistaPresupuestos().subscribe(data=>{
      this.source = data
    })
  }

  onAdd(event){
    console.log(event.newData)

    let json = {
      'cliente': event.newData.cliente,
      'ean13': event.newData.producto,
      'unidades': event.newData.unidades,
      'precioActual': event.newData.precioActual,
      'precioOfertado': event.newData.precioOfertado,
      'mes': event.newData.mes,
      'estado': event.newData.estado
    }

    this.authSvc.registrarPresupuesto(json).subscribe(data=>{
      if(data == true){
        this.showToastRegister('success')
        this.ngOnInit()
      }else{
        this.showToastErrorDatos('danger')
      }
    })

  }

  onDeleteConfirm(event){
    console.log(event)

    this.authSvc.eliminarPresupuesto(event.data.id).subscribe(data=>{
      if(data == 1){
        this.showToastEliminar('warning')
        this.ngOnInit()
      }
    })
  }

  onEdit(event){
    console.log(event)

    let json = {
      'id': event.newData.id,
      'cliente': event.newData.cliente,
      'estado': event.newData.estado,
      'mes': event.newData.mes,
      'precioActual': event.newData.precioActual,
      'precioOfertado': event.newData.precioOfertado,
      'unidades': event.newData.unidades
    }

    this.authSvc.actualizarPresupuesto(json).subscribe(data=>{
      if(data == 1){
        this.showToast('success')
        this.ngOnInit()
      }else{
        this.showToastErrorDatos('danger')
      }
    })
  }

  showToast(status: NbComponentStatus) {
    this.toastrService.show(status, `Registro Actualizado!`, { status });
  }

  showToastRegister(status: NbComponentStatus) {
    this.toastrService.show(status, `Registro Creado!`, { status });
  }

  showToastEliminar(status: NbComponentStatus) {
    this.toastrService.show(status, `Registro Eliminado!`, { status });
  }
  showToastErrorDatos(status: NbComponentStatus) {
    this.toastrService.show(status, `Error de Datos!`, { status });
  }

  config = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      cliente: {
        title: 'Cliente',
        type: 'string'
      },
      producto: {
        title: 'Producto',
        type: 'string',
        editable: false
      },
      unidades:{
        title: 'Unidades',
        type: 'number'
      },
      precioActual:{
        title: 'Precio Actual',
        type: 'number'
      },
      precioOfertado: {
        title: 'Precio Oferta',
        type: 'number'
      },
      mes: {
        title: 'Mes',
        editor:{
          type: 'list',
          config:{
            list: []
          }
        }
      },
      estado: {
        title: 'Estado',
        editor:{
          type: 'list',
          config:{
            list: []
          }
        }
      }
    },
  };

}
