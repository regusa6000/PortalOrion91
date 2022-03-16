import { Component, OnInit } from '@angular/core';
import { NbComponentStatus, NbToastrService } from '@nebular/theme';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'ngx-productos-faqs',
  templateUrl: './productos-faqs.component.html',
  styleUrls: ['./productos-faqs.component.scss']
})
export class ProductosFaqsComponent implements OnInit {

  source: any

  constructor(public authSvc: AuthService,private toastrService: NbToastrService) { }

  ngOnInit(): void {
    this.authSvc.cargarTablaFaqs().subscribe(data=>{
      this.source = data
    })
  }

  onAdd(event){

    let json = {
      'idProduct': event.newData.id_product,
      'faq': event.newData.faq
    }

    this.authSvc.crearFaq(json).subscribe(data=>{
      if(data == true){
        this.showToastRegister('success')
        this.ngOnInit()
      }else{
        this.showToastErrorDatos('danger')
      }
    })

    console.log(event)
  }

  onDeleteConfirm(event){

    this.authSvc.eliminarFaq(event.data.id_product_faq).subscribe(data=>{
      if(data == 1){
        this.showToastEliminar('warning')
        this.ngOnInit()
      }else{
        this.showToastErrorDatos('danger')
      }
    })

    console.log(event)
  }

  onEdit(event){

    console.log(event.newData)

    let json = {
      'idProduct': event.newData.id_product,
      'idFaq': event.newData.id_product_faq,
      'faq': event.newData.faq,
    }

    this.authSvc.actualizarFaq(json).subscribe(data=>{
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
      id_product: {
        title: 'Id Producto*',
        type: 'number'
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
