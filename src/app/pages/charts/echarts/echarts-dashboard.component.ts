import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-echarts-dashboard',
  template: `<div echarts [options]= "option" width="100%"></div>`,
})
export class EchartsDashboardComponent implements OnInit, AfterViewInit {

  option: any = {};

  constructor() { }

  ngAfterViewInit(): void {
    this.option = {
      legend: {},
      tooltip: {},
      dataset: {
        source: [
          ['product', 'Dia', 'Mes', 'Año'],
          ['Todos', 43.3, 85.8, 85.8],
          ['Orion91', 83.1, 73.4, 55.1],
          ['Makro', 86.4, 65.2, 82.5],
          ['ManoMano', 72.4, 53.9, 39.1],
        ]
      },
      xAxis: { type: 'category' },
      yAxis: {},
      series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' },]
    };


  }

  ngOnInit(): void {
  }

}
