import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'ngx-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent implements OnInit {

  source: any
  chart: Chart | undefined;
  arrayFavorito: any

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
    this.authSvc.cargarTopFavoritos().subscribe(data=>{
      this.source = data
    })

    this.authSvc.cargarGraficoFavoritos().subscribe(data=>{
      this.arrayFavorito = data

      console.log(this.arrayFavorito[0])

      let arrayFechas = []
      let arrayCantidad = []

      for(let contador = 0 ; contador < this.arrayFavorito.length ; contador++){
        arrayFechas.push(this.arrayFavorito[contador].fecha)
        arrayCantidad.push(this.arrayFavorito[contador].contador)
      }

      this.lineaGrafica(arrayFechas,arrayCantidad);

    })


  }

  lineaGrafica(arrayFechas: any, arrayCantidad: any){

    if(this.chart){
      this.chart.destroy();
    }

    this.chart = new Chart('canvas',{
      type: 'line',
      data: {
          labels: arrayFechas,
          datasets: [{
              label: 'Cantidad: ',
              data: arrayCantidad,
              borderColor: 'black',
              borderWidth: 3
          }]
      }
    })

  }

  config = {
    pager: { display: false },
    actions: false,
    columns:{
      idx:{
        title: 'Posición',
        type: 'text',
        valuePrepareFunction:(value,row,cell) =>{
          return `${cell.row.index + 1 +'º'}`;
        }
      },
      id_product:{
        title:'Id Producto',
        type: 'number'
      },
      name:{
        title: 'Producto',
        type: 'string'
      },
      nFavoritos:{
        title: 'Cantidad de Favoritos',
        type: 'number'
      }
    }
  }

}
