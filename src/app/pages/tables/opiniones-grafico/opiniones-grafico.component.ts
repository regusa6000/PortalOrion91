import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'ngx-opiniones-grafico',
  templateUrl: './opiniones-grafico.component.html',
  styleUrls: ['./opiniones-grafico.component.scss']
})
export class OpinionesGraficoComponent implements OnInit {

  listadoSelect: any
  chart: Chart | undefined;
  loading = false;
  arrayGrafico: any

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
    this.authSvc.cargarSelectOpiniones().subscribe(data=>{
      this.listadoSelect = data
    })
  }

  buscarTienda(event){
    this.authSvc.cargarGraficoOpiniones(event).subscribe(data=>{

      this.toggleLoadingAnimation()

      this.arrayGrafico = data

      let fechas = []
      let porcentaje = []

      for(let a = 0 ; a < this.arrayGrafico.length ; a++){
        fechas.push(this.arrayGrafico[a].fecha)
      }

      for(let b = 0 ; b < this.arrayGrafico.length ; b++ ){
        porcentaje.push(this.arrayGrafico[b].porcentaje)
      }

      console.log(fechas)
      console.log(porcentaje)
      this.cargarGrafico(fechas,porcentaje)

    })

    console.log(event)

  }

  toggleLoadingAnimation() {
    this.loading = true;
    setTimeout(() => this.loading = false, 3000);
  }

  cargarGrafico(arrayFechas: any, arrayPorcentaje: any){
    this.chart = new Chart('canvas',{
      type: 'line',
      data: {
          labels: arrayFechas,
          datasets: [{
              label: 'Porcentaje: ',
              data: arrayPorcentaje,
              borderColor: 'black',
              borderWidth: 3
          }]
      }
    })
  }

}
