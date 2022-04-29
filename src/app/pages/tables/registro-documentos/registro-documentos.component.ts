import { Component, OnInit } from '@angular/core';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { AuthService } from '../../../auth/auth.service';
import { GuardarDocumentosComponent } from './guardar-documentos/guardar-documentos.component'

@Component({
  selector: 'ngx-registro-documentos',
  templateUrl: './registro-documentos.component.html',
  styleUrls: ['./registro-documentos.component.scss']
})
export class RegistroDocumentosComponent implements OnInit {

  source: any
  ean13: any

  constructor(public authSvc: AuthService,private toastrService: NbToastrService, private dialogService: NbDialogService) { }

  ngOnInit(): void {
  }

  open(){
    this.dialogService.open(GuardarDocumentosComponent,{}).onClose.subscribe(data=>{})
  }

  buscarDocumentos(){
    this.authSvc.listadoDocumentosPorEan13(this.ean13).subscribe(data=>{
      this.source = data
    })
  }

  config = {
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    actions:{
      add: false,
      edit: false
    },
    columns: {
      ean13: {
        title: 'Ean13',
        type: 'string',
      },
      producto:{
        title: 'Producto',
        type: 'string'
      },
      idPais: {
        title: 'Pais',
        type: 'string'
      },
      tipo: {
        title: 'Tipo de Documento',
        type: 'string',
      },
      nombreArchivo: {
        title: 'Archivo',
        type: 'string',
      },
      date_add:{
        title: 'Publicado',
        type: 'string'
      }
    },
  };

  // idPais: {
  //   title: 'Imagen',
  //   type: 'html',
  //   valuePrepareFunction: (value) =>{
  //     return "<img src='"+ value + "'>"
  //   }
  // },

}
