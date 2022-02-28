import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import * as Chart from 'chart.js';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'ngx-ventas-productos',
  templateUrl: './ventas-productos.component.html',
  styleUrls: ['./ventas-productos.component.scss']
})
export class VentasProductosComponent implements OnInit {

  fechaInicio: any
  fechaFin: any
  guardarValorSelect: any
  arrayRelleno: any
  mostrarTabla = false
  idProduct: any

  chartSumatoria: Chart | undefined;

  tiendas: string[] = ['Orion91','ManoMano','Carrefour','AliExpress','Amazon','Grupon','Embargos','MequedoUno','Fnac','Wish','Makro','PcComponentes','Sprinter','Bulevip'];

  constructor(public authSvc: AuthService) {}

  ngOnInit(): void {
  }

  cambioRango(event){
    if (event.start) this.fechaInicio = moment(event.start).format('YYYY-MM-DD');
    if (event.end) this.fechaFin = moment(event.end).format('YYYY-MM-DD');
    console.log(this.fechaInicio)
    console.log(this.fechaFin)
  }


  buscarProducto(idProducto: number){
    this.authSvc.ventasProductos(idProducto,this.fechaInicio,this.fechaFin,this.guardarValorSelect).subscribe(data=>{
      this.arrayRelleno = data
      this.mostrarTabla = true
      // setInterval(() => { this.lineaGrafica(this.arrayRelleno); }, 10000);
      setTimeout(() => { this.lineaGrafica(this.arrayRelleno); }, 10000);
      console.log(data)
    })
  }

  select(event){
    this.guardarValorSelect = event
    console.log(this.guardarValorSelect)
  }

  lineaGrafica( arrayTiendas: any){

    if(this.chartSumatoria){
      this.chartSumatoria.destroy();
    }

    let miArrayFechas = []
    let miArrayImporte = []

    miArrayFechas.push(0)
    miArrayImporte.push(0)

    for (let contador = 0; contador < arrayTiendas.length; contador++) {
      miArrayFechas[contador] = arrayTiendas[contador].date_add
      miArrayImporte[contador] =  arrayTiendas[contador].importeVendido
    }

    miArrayImporte.reverse()
    miArrayFechas.reverse()

    console.log(miArrayFechas)
    console.log(miArrayImporte)

    this.chartSumatoria = new Chart('canvasSumatoria', {
      type: 'line',
      data: {
          labels: miArrayFechas,
          datasets: [{
              label: 'Importe',
              data: miArrayImporte,
              borderColor: 'black',
              borderWidth: 3
          }]
      }
  });

  }

}

