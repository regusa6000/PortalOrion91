import { Component, OnInit } from '@angular/core';
import { NbComponentStatus, NbToastrService } from '@nebular/theme';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'ngx-configuracion-zonas',
  templateUrl: './configuracion-zonas.component.html',
  styleUrls: ['./configuracion-zonas.component.scss']
})
export class ConfiguracionZonasComponent implements OnInit {

  source: any;
  idUsuario: number

  constructor(public authSvc: AuthService, private toastrService: NbToastrService) {
    let datosUsuario = localStorage.getItem('auth_app_token')
    console.log('LocalStorage')
    let valoresUsuario = JSON.parse(datosUsuario)
    console.log(valoresUsuario)

    let idUsuario = valoresUsuario.value[0]['id_user']
    this.idUsuario = idUsuario
  }

  ngOnInit(): void {
    this.authSvc.cargarZonas().subscribe(data=>{
      this.source = data
    })
  }

  onAdd(event){

    let json = {
      'idUsuario': this.idUsuario,
      'nombreZona': event.newData.nombre_zona,
      'posicion': event.newData.posicion
    }

    this.authSvc.crearNuevaZona(json).subscribe(data=>{
      if(data == true){
        this.showToastRegister('success')
        this.ngOnInit()
      }else{
        this.showToastErrorDatos('danger')
      }
    })

    console.log(event.newData)
  }

  onEdit(event){

    let json = {
      'idZona': event.newData.id_zona,
      'nombreZona': event.newData.nombre_zona,
      'posicion': event.newData.posicion
    }

    this.authSvc.actualizarZona(json).subscribe(data=>{
      if(data == 1){
        this.showToast('success')
        this.ngOnInit()
      }else{
        this.showToastErrorDatos('danger')
      }
    })


    console.log(event.newData)
  }

  showToast(status: NbComponentStatus) {
    this.toastrService.show(status, `Zona Actualizada!`, { status });
  }

  showToastRegister(status: NbComponentStatus) {
    this.toastrService.show(status, `Zona Creado!`, { status });
  }

  showToastErrorDatos(status: NbComponentStatus) {
    this.toastrService.show(status, `Error de Datos!`, { status });
  }

  config = {
    actions: {
      delete: false
    },
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
        title: 'Nombre Zona',
        type: 'string',
      },
      posicion: {
        title: 'Posición',
        type: 'number',
      },
    },
  };

}
