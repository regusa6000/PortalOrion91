import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'ngx-no-mapeados-ali-express',
  templateUrl: './no-mapeados-ali-express.component.html',
  styleUrls: ['./no-mapeados-ali-express.component.scss']
})
export class NoMapeadosAliExpressComponent implements OnInit {

  source: any

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
    this.authSvc.noMapeadosAli().subscribe(data=>{
      this.source = data
    })
  }

  config = {
    pager: { display: false },
    actions: false,
    columns: {
      id_category_default: {
        title: 'Id Categoría',
        type: 'number'
      },
      nombreCatOrion91: {
        title: 'Nombre Cat-Orion91',
        type: 'string',
      },
      idCatPadreOrion91: {
        title: 'Id Categoría Padre Orion91',
        type: 'string'
      },
      nHijos: {
        title: 'Número de Hijos',
        type: 'number'
      },
      ae_id:{
        title: 'Id AliExpress',
        type: 'string'
      },
      nombreCatAliexpress:{
        title: 'Nombre Cat-AliExpress',
        type: 'string'
      },
    },
  };

}
