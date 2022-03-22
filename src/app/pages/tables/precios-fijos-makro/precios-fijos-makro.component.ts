import { Component, OnInit } from '@angular/core';
import { NbComponentStatus, NbToastrService } from '@nebular/theme';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'ngx-precios-fijos-makro',
  templateUrl: './precios-fijos-makro.component.html',
  styleUrls: ['./precios-fijos-makro.component.scss']
})
export class PreciosFijosMakroComponent implements OnInit {

  source: any
  listadoProductos: any
  listado = []
  myConfig: any

  constructor(public authSvc: AuthService,private toastrService: NbToastrService) {
    this.authSvc.cargarSelectPreciosFijos().subscribe(data=>{
      this.listadoProductos = data

      for(let a = 0 ; a < this.listadoProductos.length ; a++){
        let json = {
          value:  this.listadoProductos[a].sku,
          title: this.listadoProductos[a].name
        }
        this.listado.push(json)
      }

      this.myConfig = this.config;
      this.myConfig.columns.name.editor.config.list = this.listado;
      this.config = Object.assign({}, this.myConfig)

    })
  }

  ngOnInit(): void {
    this.authSvc.cargarTablaPreciosFijos().subscribe(data=>{
      this.source = data
    })
  }

  onAdd(event){

     let json = {
      'sku': event.newData.name,
      'precioFijo': event.newData.precio_fijo
     }

     this.authSvc.registrarPrecioFijo(json).subscribe(data=>{
      if(data == true){
        this.ngOnInit()
        this.showToastRegister('success')
      }else{
        this.showToastErrorDatos('danger')
      }
     })

    console.log(event.newData)
  }

  onDeleteConfirm(event){

    this.authSvc.eliminarPrecioFijo(event.data.id).subscribe(data=>{
      if(data == 1){
        this.ngOnInit()
        this.showToastEliminar('warning')
      }
    })

    console.log(event)
  }

  onEdit(event){

    let json = {
      'id': event.newData.id,
      'precioNuevo': event.newData.precio_fijo
    }

    this.authSvc.actualizarPrecioFijo(json).subscribe(data=>{
      if(data == 1){
        this.ngOnInit()
        this.showToast('success')
      }else{
        this.showToastErrorDatos('danger')
      }
    })

    console.log(event)
  }

  showToast(status: NbComponentStatus) {
    this.toastrService.show(status, `Precio Fijo Actualizado!`, { status });
  }

  showToastRegister(status: NbComponentStatus) {
    this.toastrService.show(status, `Precio Fijo Creado!`, { status });
  }

  showToastEliminar(status: NbComponentStatus) {
    this.toastrService.show(status, `Precio Fijo Eliminado!`, { status });
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
    columns:{
      name:{
        title:'Producto*',
        type: 'text',
        editable: false,
        editor:{
          type: 'list',
          config: {
            list: []
          }
        }
      },
      precio_fijo:{
        title: 'Precio Fijo*',
        type: 'number'
      },
      fecha:{
        title: 'Fecha Creada',
        type: 'string',
        editable: false
      }
    }
  }


}
