import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'ngx-historico-stock',
  templateUrl: './historico-stock.component.html',
  styleUrls: ['./historico-stock.component.scss']
})
export class HistoricoStockComponent implements OnInit {

  historicoStock: any;
  idProductoStock = false;
  ean13: any
  loading = false;

  //Arrays para graficos
  stockArray: any;
  stockActual: any;

  chart: Chart | undefined;

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
  }

  buscar(ean13: any){

    this.toggleLoadingAnimation()

    this.authSvc.cargarTablaHistoricoStock(ean13).subscribe(data=>{
      this.historicoStock = data
      this.idProductoStock = true
      console.log(this.historicoStock)
    })

    this.authSvc.cargarGraficoIdProducto(ean13).subscribe(data=>{



      this.stockArray = ''
      this.stockArray = data
      console.log(this.stockArray)


      //Parte del grafico
      let temporalFechas: any[] = []
      let temporalStock: any[] = []

      for( let a = 0 ; a < this.stockArray.length ; a++ ){
          if(this.stockArray[a].length > 0){
            temporalFechas.push(this.stockArray[a][0].fecha_actualizacion)
          }
      }

      for( let a = 0 ; a < this.stockArray.length ; a++ ){
        if(this.stockArray[a].length > 0){
          temporalStock.push(this.stockArray[a][0].stock)
        }
      }

      // temporalFechas.reverse()
      // temporalStock.reverse()

      temporalFechas.unshift(0)
      temporalStock.unshift(0)

      console.log(temporalFechas)
      console.log(temporalStock)

      // setTimeout(() => { this.lineaGrafica(temporalFechas,temporalStock); }, 10000);
      this.lineaGrafica(temporalFechas,temporalStock)
    })

  }

  toggleLoadingAnimation() {
    this.loading = true;
    setTimeout(() => this.loading = false, 20000);
  }

  lineaGrafica(arrayFechas: any, arrayStock: any){

    if(this.chart){
      this.chart.destroy();
    }

    this.chart = new Chart('canvas',{
      type: 'line',
      data: {
          labels: arrayFechas,
          datasets: [{
              label: 'Stock: ',
              data: arrayStock,
              borderColor: 'black',
              borderWidth: 3
          }]
      }
    })

  }

  config = {
    actions: false,
    columns: {
      ean13: {
        title: 'Ean13',
        type: 'number',
      },
      name: {
        title: 'Producto',
        type: 'string',
      },
      id_atributo: {
        title: 'Id Atributo',
        type: 'number',
      },
      grupo: {
        title: 'Grupo',
        type: 'string',
      },
      valor: {
        title: 'Valor',
        type: 'string',
      },
      fecha_actualizacion:{
        title: 'Ultima Actualización',
        type: 'string'
      },
      stock:{
        title: 'Stock',
        type: 'number'
      },
    },
  };

}
