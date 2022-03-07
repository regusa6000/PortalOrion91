import { Component, OnInit } from '@angular/core';
import { NbComponentStatus, NbToastrService } from '@nebular/theme';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'ngx-opiniones-crud',
  templateUrl: './opiniones-crud.component.html',
  styleUrls: ['./opiniones-crud.component.scss']
})
export class OpinionesCrudComponent implements OnInit {

  source: any;
  listadoCanales: any
  listado = []
  myConfig:any;
  base: any

  constructor(public authSvc: AuthService,private toastrService: NbToastrService) {
    this.authSvc.listadoCanales().subscribe(data=>{
      this.listadoCanales = data

      for(let a = 0 ; a < this.listadoCanales.length; a++){
        let json = {
          value: this.listadoCanales[a].id,
          title: this.listadoCanales[a].canal
        }
        this.listado.push(json)
      }
      this.myConfig = this.config;
      this.myConfig.columns.canal.editor.config.list = this.listado;
      this.config = Object.assign({}, this.myConfig)
    })
   }

  ngOnInit(): void {
    this.authSvc.listadoGeneralOpiniones().subscribe(data=>{
      this.source = data
    })
  }

  onAdd(event){

    this.authSvc.baseTipoOpinion(event.newData.canal).subscribe(data=>{
      this.base = parseInt(data[0].base)
      let idCanalOpinion = event.newData.canal
      let valor = event.newData.valor

      //Calculamos Porcentaje
      let porcentaje = (valor / parseInt(this.base)) * 100

      let json = {
        'idCanal': idCanalOpinion,
        'valor': valor,
        'porcentaje': porcentaje
      }

      this.authSvc.registrarPorcentajeCanal(json).subscribe(data=>{
        console.log(data)
        if(data == true){
          this.showToastRegister('success')

          this.authSvc.listadoGeneralOpiniones().subscribe(data=>{
            this.source = ''
            this.source = data
          })

        }else{
          this.showToastErrorDatos('danger')
        }

      })

      console.log(json)

    })
    console.log(event.newData)
  }

  onDeleteConfirm(event){

    this.authSvc.eliminarRegistroPorcentaje(event.data.idValor).subscribe(data=>{
      if(data == 1){
        this.showToastEliminar('warning')
        this.authSvc.listadoGeneralOpiniones().subscribe(data=>{
          this.source = ''
          this.source = data
        })
      }
      console.log(data)
    })

    console.log(event.data)
  }

  onEdit(event){

    this.authSvc.baseTipoOpinion(event.newData.idCanal).subscribe(data=>{

      let base = parseInt(data[0].base)
      let valor = event.newData.valor
      let porcentaje = (valor/base) * 100
      let json = {
        'idValor': event.newData.idValor,
        'valor': valor,
        'porcentaje': porcentaje
      }

      this.authSvc.actualizarRegistroPorcentaje(json).subscribe(data=>{
        if(data == 1){
          this.showToast('success')
          this.authSvc.listadoGeneralOpiniones().subscribe(data=>{
          this.source = ''
          this.source = data
        })
        }else{
          this.showToastErrorDatos('danger')
        }
        console.log(data)
      })

    })

    console.log(event)
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
    actions:{
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
      canal: {
        title: 'Canal*',
        type: 'text',
        editable: false,
        editor: {
          type: 'list',
          config: {
            list: []
          }
        }
      },
      valor: {
        title: 'Valor Actual*',
        type: 'number'
      },
      porcentaje: {
        title: 'Porcentaje',
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
