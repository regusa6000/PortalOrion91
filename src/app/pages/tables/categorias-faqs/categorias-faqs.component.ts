import { Component, OnInit } from '@angular/core';
import { NbComponentStatus, NbToastrService } from '@nebular/theme';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'ngx-categorias-faqs',
  templateUrl: './categorias-faqs.component.html',
  styleUrls: ['./categorias-faqs.component.scss']
})
export class CategoriasFaqsComponent implements OnInit {

  source: any

  constructor(public authSvc: AuthService,private toastrService: NbToastrService) { }

  ngOnInit(): void {
    this.authSvc.cargarFaqsCategorias().subscribe(data=>{
      this.source = data
    })
  }

  onAdd(event){

    let json = {'idCategoria': event.newData.id_category,'faq': event.newData.faq}

    this.authSvc.crearFaqCategoria(json).subscribe(data=>{
      if(data == true){
        this.showToastRegister('success')
        this.ngOnInit()
      }else{
        this.showToastErrorDatos('danger')
      }
    })

  }

  onDeleteConfirm(event){
    this.authSvc.eliminarFaqCategoria(event.data.id).subscribe(data=>{
      if(data == 1){
        this.showToastEliminar('warning')
        this.ngOnInit()
      }else{
        this.showToastErrorDatos('danger')
      }
    })
  }

  onEdit(event){

    let json = {'idFaq': event.newData.id, 'idCategoria': event.newData.id_category, 'faq': event.newData.faq}

    this.authSvc.actualizarFaqCategoria(json).subscribe(data=>{
      if(data == 1){
        this.showToast('success')
        this.ngOnInit()
      }else{
        this.showToastErrorDatos('danger')
      }
    })

  }

  showToast(status: NbComponentStatus) {
    this.toastrService.show(status, `Faq Actualizado!`, { status });
  }

  showToastRegister(status: NbComponentStatus) {
    this.toastrService.show(status, `Faq Creado!`, { status });
  }

  showToastEliminar(status: NbComponentStatus) {
    this.toastrService.show(status, `Faq Eliminado!`, { status });
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
      id_category: {
        title: 'Id Categoría*',
        type: 'number',
        editable: false
      },
      faq: {
        title: 'Faq*',
        editor: {
          type: 'textarea'
        }
      },
      date_add:{
        title: 'Fecha Creación',
        type: 'string',
        editable: false
      },
      date_update:{
        title: 'Fecha Actualización',
        type: 'string',
        editable: false
      }
    },
  };


}
