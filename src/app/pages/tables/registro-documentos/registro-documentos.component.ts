import { Component, OnInit } from '@angular/core';
import { NbComponentStatus, NbDialogService, NbToastrService } from '@nebular/theme';
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
    this.authSvc.listadoCompletoArchivos().subscribe(data=>{
      this.source = data
    })
  }

  open(){
    this.dialogService.open(GuardarDocumentosComponent,{}).onClose.subscribe(data=>{})
    // this.dialogService.refrescarTabla
  }

  buscarDocumentos(){
    this.authSvc.listadoDocumentosPorEan13(this.ean13).subscribe(data=>{
      this.source = data
    })
  }

  onDeleteConfirm(event){
    console.log(event)
    let json = {'idArchivo': event.data.id, 'ean13': event.data.ean13, 'nameImagen': event.data.nombreArchivo}

    this.authSvc.eliminarArchivoDeProducto(json).subscribe(data=>{
      console.log(data)
      if(data == 1){
        this.showToastEliminar('warning')
        this.authSvc.listadoDocumentosPorEan13(event.data.ean13).subscribe(data=>{
          this.source = data
        })
      }
    })
  }

  showToastEliminar(status: NbComponentStatus) {
    this.toastrService.show(status, `Archivo Eliminado!`, { status });
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
      imagen: {
        title: 'Imagen',
        type: 'html',
        valuePrepareFunction: (value) =>{

          let cadena = value.split('.')

          switch (cadena[1]){
            case 'csv':
              return "<a href='http://vpnxer.grupohidalgos.com:8070/"+ value + "' target='_blank'><img src= '../../../../assets/images/Hoja de calculo.png' class='imagen'></a>"
            case 'pdf':
              return "<a href='http://vpnxer.grupohidalgos.com:8070/"+ value + "' target='_blank'><img src= '../../../../assets/images/Hoja de calculo.png' class='imagen'></a>"
            default:
              return "<a href='http://vpnxer.grupohidalgos.com:8070/"+ value + "' target='_blank'><img class='imagen' src='http://vpnxer.grupohidalgos.com:8070/"+ value + "'></a>"

          }

        }
      },
      nombreArchivo: {
        title: 'Archivo',
        type: 'string',
      },
      tags:{
        title: 'Observación',
        type: 'string'
      },
      date_add:{
        title: 'Publicado',
        type: 'string'
      }
    },
  };

}
