import { Component, OnInit } from '@angular/core';
import { NbComponentStatus, NbToastrService } from '@nebular/theme';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'ngx-contrasenas-plataformas',
  templateUrl: './contrasenas-plataformas.component.html',
  styleUrls: ['./contrasenas-plataformas.component.scss']
})
export class ContrasenasPlataformasComponent implements OnInit {

  source: any

  constructor(public authSvc: AuthService, private toastrService: NbToastrService) { }

  ngOnInit(): void {
    this.authSvc.listadoContraseñasPlataformas().subscribe(data=>{
      this.source = data
    })
  }

  onAdd(event){
    let json = {'plataforma': event.newData.plataforma, 'email': event.newData.email, 'password': event.newData.password}
    this.authSvc.registrarContraseñasPlataformas(json).subscribe(data=>{
      if(data == true){
        this.showToastRegister('success')
        this.ngOnInit()
      }else{
        this.showToastErrorDatos('danger')
      }
    })
  }

  onEdit(event){
    let json = {'idPlataforma': event.newData.id, 'plataforma': event.newData.plataforma, 'email': event.newData.email, 'password': event.newData.password}
    this.authSvc.actualizarContraseñasPlataformas(json).subscribe(data=>{
      if(data == 1){
        this.showToast('success')
        this.ngOnInit()
      }else{
        this.showToastErrorDatos('danger')
      }
    })
  }

  onDeleteConfirm(event){
    console.log(event)
    this.authSvc.eliminarContraseñasPlataformas(event.data.id).subscribe(data=>{
      this.ngOnInit()
      this.showToastEliminar('warning')
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
      plataforma: {
        title: 'Plataforma',
        type: 'string',
      },
      email: {
        title: 'Correo',
        type: 'string',
      },
      password: {
        title: 'Contraseña',
        type: 'string',
      },
      date_add:{
        title: 'Fecha Creación',
        type: 'string',
        editable: false
      },
    },
  };

}
