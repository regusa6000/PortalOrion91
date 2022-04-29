import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'ngx-listado-noticias',
  templateUrl: './listado-noticias.component.html',
  styleUrls: ['./listado-noticias.component.scss']
})
export class ListadoNoticiasComponent implements OnInit {

  source: any
  idUsuario: number

  constructor(public authSvc: AuthService,private toastrService: NbToastrService) {
    let datosUsuario = localStorage.getItem('auth_app_token')
    console.log('LocalStorage')
    let valoresUsuario = JSON.parse(datosUsuario)
    console.log(valoresUsuario)

    let idUsuario = valoresUsuario.value[0]['id_user']
    this.idUsuario = idUsuario
   }

  ngOnInit(): void {
    this.authSvc.listadoNoticias(this.idUsuario).subscribe(data=>{
      this.source = data
    })
  }

  onEdit(event){
    let json = {'idNoticia': event.newData.id_noticia, 'tituloNoticia': event.newData.titulo, 'noticia': event.newData.noticia}
    this.authSvc.actualizarNoticia(json).subscribe(data=>{
      this.ngOnInit()
    })
  }

  onDeleteConfirm(event){
    console.log(event.data)
    this.authSvc.eliminarNoticia(event.data.id_noticia,event.data.img).subscribe(data=>{
      this.ngOnInit()
    })
  }




  config = {
    actions:{
      add:false
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
      titulo: {
        title: 'Titulo Noticia',
        type: 'string'
      },
      noticia: {
        title: 'Noticia',
        type: 'string',
      },
      img:{
        title: 'Imagen',
        type: 'html',
        editable: false,
        valuePrepareFunction: (value: string) =>{
          return '<div class="caja"><img src= "http://vpnxer.grupohidalgos.com:8070/noticias/'+ value +'" class="imagen"></div>';
        }
      },
      name: {
        title: 'Usuario',
        type: 'string',
        editable: false
      },
      fecha:{
        title: 'Fecha Registro',
        type: 'string',
        editable: false
      }
    },
  };

}
