import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../auth/auth.service';

@Component({
  selector: 'ngx-grafico-ventas-un-mes',
  templateUrl: './grafico-ventas-un-mes.component.html',
  styleUrls: ['./grafico-ventas-un-mes.component.scss']
})
export class GraficoVentasUnMesComponent implements OnInit {

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
    this.authSvc.graficoVentasUnMes().subscribe(data=>{

      let option
      var dom = document.getElementById("container3");
      var myChart = echarts.init(dom);
      var app = {};


      option = {
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {c}€ ({d}%)'
        },
        // legend: {
        //   bottom: 10,
        //   left: 'center',
        //   data: ['Orion91', 'Amazon', 'Makro', 'ManoMano', 'AliExpress','Worten','Carrefour','Embargos','MequedoUno','Sprinter','Bulevip','Venca','Fnac','MediaMarkt']
        // },
        series: [
          {
            type: 'pie',
            radius: '65%',
            center: ['50%', '50%'],
            selectedMode: 'single',
            data: [
              { value: data[0].Sum_Orion, name: 'Orion91'},
              { value: data[0].Sum_Amazon, name: 'Amazon'},
              { value: data[0].Sum_Makro, name: 'Makro' },
              { value: data[0].Sum_Manomano, name: 'ManoMano' },
              { value: data[0].Sum_Aliexpress, name: 'AliExpress'},
              { value: data[0].Sum_Wortem, name: 'Worten'},
              { value: data[0].Sum_Carrefour, name: 'Carrefour' },
              { value: data[0].Sum_Embargos, name: 'Embargos' },
              { value: data[0].Sum_MequedoUno, name: 'MequedoUno' },
              { value: data[0].Sum_Sprinter, name: 'Sprinter' },
              { value: data[0].Sum_Bulevip, name: 'Bulevip' },
              { value: data[0].Sum_Venca, name: 'Venca' },
              { value: data[0].Sum_Fnac, name: 'Fnac' },
              { value: data[0].Sum_MediaMarkt, name: 'MediaMarkt' }
            ],
            color: ['#008AF8','#131921','#002D72','#00E8CB','#E63107','#E41A15','#4674B4','#BDBEC0','#383637','#008B55','#52B9E2','#E8A6BC','#E1A925','#DF0000'],
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
