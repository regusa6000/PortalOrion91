import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../auth/auth.service';

@Component({
  selector: 'ngx-grafico-comparacion-ventas',
  templateUrl: './grafico-comparacion-ventas.component.html',
  styleUrls: ['./grafico-comparacion-ventas.component.scss']
})
export class GraficoComparacionVentasComponent implements OnInit {

  source: any
  año2021 = []
  año2022 = []
  // meses = ['ENERO','FEBRERO','MARZO','ABRIL','MAYO','JUNIO','JULIO','AGOSTO','SEPTIEMBRE','OCTUBRE','NOVIEMBRE','DICIEMBRE']
  meses = ['ENE','FEB','MAR','ABR','MAY','JUN','JUL','AGO','SEP','OCT','NOV','DEC']

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
    this.authSvc.graficoComparacionVentas().subscribe(data=>{
      this.source = data

      for(let a = 0 ; a < this.source.length ; a++){

        if(this.source[a].amo == 2021){
          this.año2021.push(this.source[a].total)
        }
        if(this.source[a].amo == 2022){
          this.año2022.push(this.source[a].total)
        }

      }

      console.log('2022')
      console.log(this.año2022)
      console.log('2021')
      console.log(this.año2021)
      console.log('Meses')
      console.log(this.meses)

      var dom = document.getElementById("containerComparacion");
      var myChart = echarts.init(dom);
      var app = {};
      var option;

      option = {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['2021', '2022']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          },
          title: 'Descargar'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.meses
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '2021',
            type: 'line',
            stack: 'Total',
            data: this.año2021
          },
          {
            name: '2022',
            type: 'line',
            stack: 'Total',
            data: this.año2022
          }
        ]
      };

      if (option && typeof option === 'object') {
          myChart.setOption(option);
      }

    })



  }

}
