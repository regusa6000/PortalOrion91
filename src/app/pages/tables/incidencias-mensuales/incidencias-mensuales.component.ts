import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'ngx-incidencias-mensuales',
  templateUrl: './incidencias-mensuales.component.html',
  styleUrls: ['./incidencias-mensuales.component.scss']
})
export class IncidenciasMensualesComponent implements OnInit {

  source: any;
  loading = false;

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
    this.toggleLoadingAnimation()
    this.authSvc.incidenciasMensuales().subscribe(data=>{
      this.source = data
    })
  }

  toggleLoadingAnimation() {
    this.loading = true;
    setTimeout(() => this.loading = false, 5000);
  }

  config = {
    actions: false,
    columns: {
      product_id: {
        title: 'IdProducto',
        type: 'number',
      },
      imagen: {
        title: 'Imagen',
        type: 'html',
        valuePrepareFunction: (value) =>{
          return "<img src='"+ value + "'>"
        }
      },
      product_name: {
        title: 'Producto',
        type: 'string',
      },
      atributo: {
        title: 'Atributo',
        type: 'string'
      },
      valor: {
        title: 'Valor',
        type: 'string'
      },
      cantidadIncidencias: {
        title: 'Cantidad Incidencias',
        type: 'number',
      },
      importeIncidencias:{
        title: 'Importe Incidencias',
        type: 'number',
        valuePrepareFunction: (value) =>{
          return Intl.NumberFormat('de-DE',{style:'currency',currency: 'EUR'}).format(value)
        }
      },
    },
  };

}
