import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'ngx-echarts-dashboard',
  template: `<div id="container" style="height: 100%"></div>`,
})
export class EchartsDashboardComponent implements OnInit {

  // option: any = {};

  constructor(private authSvc: AuthService) { }

  // ngAfterViewInit(): void {
  //   this.option = {
  //     legend: {},
  //     tooltip: {},
  //     dataset: {
  //       source: [
  //         ['product', 'Dia', 'Mes', 'Año'],
  //         ['Todos', 43.3, 85.8, 85.8],
  //         ['Orion91', 83.1, 73.4, 55.1],
  //         ['Makro', 86.4, 65.2, 82.5],
  //         ['ManoMano', 72.4, 53.9, 39.1],
  //       ]
  //     },
  //     xAxis: { type: 'category' },
  //     yAxis: {},
  //     series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' },]
  //   };


  // }

  ngOnInit(): void {

    this.authSvc.cargarGraficoCategorias().subscribe(data=>{
      var dom = document.getElementById("container");
      var myChart = echarts.init(dom);
      var app = {};

      var option;

      option = {
        tooltip: {
          trigger: 'item',
          triggerOn: 'mousemove'
        },
        series: [
          {
            type: 'tree',
            id: 0,
            name: 'tree1',
            data: [data],
            top: '0%',
            left: '15%',
            bottom: '0%',
            right: '15%',
            symbolSize: 7,
            edgeShape: 'polyline',
            edgeForkPosition: '63%',
            initialTreeDepth: 3,
            lineStyle: {
              width: 2
            },

            label: {
              backgroundColor: '#fff',
              position: 'left',
              verticalAlign: 'middle',
              align: 'right'
            },

            leaves: {
              label: {
                position: 'right',
                verticalAlign: 'middle',
                align: 'left'
              }
            },

            emphasis: {
              focus: 'descendant'
            },

            expandAndCollapse: true,
            animationDuration: 550,
            animationDurationUpdate: 750
          }
        ]
      };

      setTimeout(() => {
        myChart.setOption(option);
       }, 10000);


       console.log(data)

    })

  }

}
