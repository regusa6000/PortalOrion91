import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'ngx-amazon-caracteres',
  templateUrl: './amazon-caracteres.component.html',
  styleUrls: ['./amazon-caracteres.component.scss']
})
export class AmazonCaracteresComponent implements OnInit {

  source: any

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
    this.authSvc.alertasAmazon().subscribe(data=>{
      this.source = data
    })
  }

  config = {
    actions:false,
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
        title: 'Id Producto',
        type: 'number'
      },
      ax_id: {
        title: 'Id Ax',
        type: 'string',
      },
      Name_ORION91:{
        title: 'Producto ORION91',
        type: 'string',
      },
      MP_NombreArticulo:{
        title: 'Producto Amazon',
        type: 'string'
      },
      caracteres:{
        title: 'Total de Caracteres',
        type: 'number'
      }
    },
  };

}
