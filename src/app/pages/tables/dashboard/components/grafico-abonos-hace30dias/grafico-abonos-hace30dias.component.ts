import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../auth/auth.service';

@Component({
  selector: 'ngx-grafico-abonos-hace30dias',
  templateUrl: './grafico-abonos-hace30dias.component.html',
  styleUrls: ['./grafico-abonos-hace30dias.component.scss']
})
export class GraficoAbonosHace30diasComponent implements OnInit {

  grafico: any
  arrayGrafico = []
  arrayColores = []

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
    this.authSvc.graficoAbonos30Dias().subscribe(data=>{
      this.grafico = data

      let json = {value: data[0].abonosSinMotivar, name: 'Abonos Sin Motivar'}
      let color = '#910024'
      this.arrayGrafico.push(json)
      this.arrayColores.push(color)

      let json1 = {value: data[0].abonosMotivados, name: 'Abonos Motivados'}
      let color1 = '#008140'
      this.arrayGrafico.push(json1)
      this.arrayColores.push(color1)

      let option
      var dom = document.getElementById("containerGraficoHace30Dias");
      var myChart = echarts.init(dom);
      var app = {};


      option = {
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {c} ({d}%)'
        },
        series: [
          {
            type: 'pie',
            radius: '65%',
            center: ['50%', '50%'],
            selectedMode: 'single',
            data: this.arrayGrafico,
            color: this.arrayColores,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };

      if (option && typeof option === 'object') {
        myChart.setOption(option);
      }
    })
  }

}
