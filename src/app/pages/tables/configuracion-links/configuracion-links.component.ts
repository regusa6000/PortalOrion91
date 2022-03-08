import { Component, OnInit } from '@angular/core';
import { NbComponentStatus, NbToastrService } from '@nebular/theme';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'ngx-configuracion-links',
  templateUrl: './configuracion-links.component.html',
  styleUrls: ['./configuracion-links.component.scss']
})
export class ConfiguracionLinksComponent implements OnInit {

  source: any
  idUsuario: number
  zonas: any
  myConfigs: any
  listadoZonas: any
  listado = []
  listadoFormato = [
    {
      value: 'Hoja de calculo',
      title: 'Hoja de calculo'
    },
    {
      value: 'Presentacion',
      title: 'Presentacion'
    },
    {
      value: 'Documentos',
      title: 'Documentos'
    },
    {
      value: 'Enlaces Normales',
      title: 'Enlaces Normales'
    }
  ]

  constructor(public authSvc: AuthService,private toastrService: NbToastrService) {

    let datosUsuario = localStorage.getItem('auth_app_token')
    console.log('LocalStorage')
    let valoresUsuario = JSON.parse(datosUsuario)
    console.log(valoresUsuario)

    let idUsuario = valoresUsuario.value[0]['id_user']
    this.idUsuario = idUsuario

    this.authSvc.cargarSelectZonas().subscribe(data=>{
      this.listadoZonas = data

      for(let a = 0 ; a < this.listadoZonas.length ; a++){
        let json = {
          value: this.listadoZonas[a].id_zona,
          title:this.listadoZonas[a].nombre_zona
        }
        this.listado.push(json)
      }

      this.myConfigs = this.config;
      this.myConfigs.columns.nombre_zona.editor.config.list = this.listado;
      this.myConfigs.columns.img_icon.editor.config.list = this.listadoFormato;
      this.config = Object.assign({}, this.myConfigs)

    })
   }

  ngOnInit(): void {
    this.authSvc.cargarLinks().subscribe(data=>{
      this.source = data
    })
    this.authSvc.cargarSelectZonas().subscribe(data=>{
      this.zonas = data
    })
  }

  onAdd(event){

    let json = {
      'idUsuario': this.idUsuario,
      'idZona': event.newData.nombre_zona,
      'nombreEnlace': event.newData.nombre_link,
      'enlace': event.newData.link,
      'formatoEnlace': event.newData.img_icon,
      'posicion': event.newData.posicion,
    }

    this.authSvc.crearNuevoLink(json).subscribe(data=>{
      if(data == true){
        this.showToastRegister('success')
        this.authSvc.cargarLinksPorIdZona(event.newData.nombre_zona).subscribe(data=>{
          this.source = ''
          this.source = data
        })
      }else{
        this.showToastErrorDatos('danger')
      }
    })

    console.log(event.newData)
  }

  onDeleteConfirm(event){
    this.authSvc.eliminarLink(event.data.id_link).subscribe(data=>{
      if(data == 1){
        this.showToastBorrar('warning')
        this.authSvc.cargarLinksPorIdZona(event.data.id_zona).subscribe(data=>{
          this.source = ''
          this.source = data
        })
      }else{
        this.showToastErrorDatos('danger')
      }
    })
    console.log(event)
  }

  onEdit(event){

    let json = {
      'idLink': event.newData.id_link,
      'nombreEnlace': event.newData.nombre_link,
      'enlace': event.newData.link,
      'formatoEnlace': event.newData.img_icon,
      'posicion': event.newData.posicion,
    }

    this.authSvc.actualizarLink(json).subscribe(data=>{
      if(data == 1){
        this.showToast('success')
        this.authSvc.cargarLinksPorIdZona(event.newData.id_zona).subscribe(data=>{
          this.source = ''
          this.source = data
        })
      }else{
        this.showToastErrorDatos('danger')
      }
    })

    console.log(event)
  }

  buscarZona(event){
    this.authSvc.cargarLinksPorIdZona(event).subscribe(data=>{
      this.source = ''
      this.source = data
    })
    console.log(event)
  }

  showToast(status: NbComponentStatus) {
    this.toastrService.show(status, `Link Actualizado!`, { status });
  }
  showToastBorrar(status: NbComponentStatus) {
    this.toastrService.show(status, `Link Eliminado!`, { status });
  }

  showToastRegister(status: NbComponentStatus) {
    this.toastrService.show(status, `Link Creado!`, { status });
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
      nombre_zona: {
        title: 'Nombre Zona*',
        type: 'string',
        editable: false,
        editor:{
          type: 'list',
          config:{
            list: []
          }
        }
      },
      nombre_link: {
        title: 'Nombre Enlace*',
        type: 'string'
      },
      link:{
        title: 'Enlace*',
        type: 'string'
      },
      img_icon: {
        title: 'Formato de Enlace*',
        type: 'text',
        editable: true,
        editor:{
          type: 'list',
          config:{
            list: []
          }
        }
      },
      posicion:{
        title: 'Posición de Enlace*',
        type: 'number',
      },
      name:{
        title: 'Creado por:',
        type: 'string',
        editable: false
      }
    },
  };


}
