import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-chartview',
  templateUrl: './chartview.component.html',
  styleUrls: ['./chartview.component.scss']
})
export class ChartviewComponent implements OnInit {
  version: string = environment.version;

  public barChartOptions: any = {
    responsive: true,
    scales: {
      xAxes: [
        {
          barThickness: 20
        }
      ]
    }
  };
  public barChartLabels: Label[] = [
    'FICO V2',
    'FICO V2 Auto',
    'FICO 08',
    'FICO 08 Auto',
    'FICO 09',
    'FICO 09 Auto',
    'BK MDS',
    'BK Plus Rescaled',
    'Vantage Score 3.0',
    'Vantage Score 4.0'
  ];
  public barChartType: ChartType = 'bar';
  public barChartLegend = false;
  public barChartPlugins: any = [];

  public barChartData: ChartDataSets[] = [
    { data: [28.7, 29.23, 28.73, 29.09, 28.73, 28.55, 18.21, 13.83, 30.02, 29.14], label: '' }
  ];

  public barChartOptions1: any = {
    responsive: true,
    scales: {
      xAxes: [
        {
          barThickness: 20
        }
      ]
    }
  };
  public barChartLabels1: Label[] = [
    'FICO V2',
    'FICO V2 Auto',
    'FICO 08',
    'FICO 08 Auto',
    'FICO 09',
    'FICO 09 Auto',
    'BK MDS',
    'BK Plus Rescaled',
    'Vantage Score 3.0',
    'Vantage Score 4.0'
  ];
  public barChartType1: ChartType = 'bar';
  public barChartLegend1 = false;
  public barChartPlugins1: any = [];

  public barChartData1: ChartDataSets[] = [
    { data: [46.58, 48.17, 46.19, 49.75, 47.99, 48.49, 30.4, 28.74, 45.92, 50.28], label: '' }
  ];

  public barChartOptions2: any = {
    responsive: true,
    scales: {
      xAxes: [
        {
          barThickness: 20
        }
      ]
    }
  };
  public barChartLabels2: Label[] = [
    'FICO V2',
    'FICO V2 Auto',
    'FICO 08',
    'FICO 08 Auto',
    'FICO 09',
    'FICO 09 Auto',
    'BK MDS',
    'BK Plus Rescaled',
    'Vantage Score 3.0',
    'Vantage Score 4.0'
  ];
  public barChartType2: ChartType = 'bar';
  public barChartLegend2 = false;
  public barChartPlugins2: any = [];

  public barChartData2: ChartDataSets[] = [
    { data: [34.51, 36.91, 34.06, 36.93, 35.23, 35.6, 24.19, 27.67, 32.79, 37.79], label: '' }
  ];

  public barChartOptions4: any = {
    responsive: true,
    scales: {
      xAxes: [
        {
          barThickness: 20
        }
      ]
    }
  };
  public barChartLabels4: Label[] = [
    'FICO V2',
    'FICO V2 Auto',
    'FICO 08',
    'FICO 08 Auto',
    'FICO 09',
    'FICO 09 Auto',
    'BK MDS',
    'BK Plus Rescaled',
    'Vantage Score 3.0',
    'Vantage Score 4.0'
  ];
  public barChartType4: ChartType = 'bar';
  public barChartLegend4 = false;
  public barChartPlugin4: any = [];

  public barChartData4: ChartDataSets[] = [
    { data: [47.59, 48.84, 46.55, 50.91, 47.82, 48.0, 33.05, 28.37, 46.27, 48.36], label: '' }
  ];

  public barChartColors: Color[] = [
    {
      backgroundColor: [
        '#b40048',
        '#e2a235',
        '#fde723',
        '#c8c922',
        '#3d87af',
        '#ba2f7d',
        '#406eb3',
        '#ed7d31',
        '#26478d',
        '#ed7d31'
      ]
    }
  ];

  public barChartColors1: Color[] = [
    {
      backgroundColor: [
        '#b40048',
        '#e2a235',
        '#fde723',
        '#c8c922',
        '#3d87af',
        '#ba2f7d',
        '#406eb3',
        '#ed7d31',
        '#26478d',
        '#ed7d31'
      ]
    },
    {
      backgroundColor: [
        '#b40048',
        '#e2a235',
        '#fde723',
        '#c8c922',
        '#3d87af',
        '#ba2f7d',
        '#406eb3',
        '#ed7d31',
        '#26478d',
        '#ed7d31'
      ]
    }
  ];

  public barChartOptions5: any = {
    responsive: true,
    scales: {
      xAxes: [
        {
          barThickness: 20
        }
      ]
    }
  };
  public barChartLabels5: Label[] = [
    'FICO V2',
    'FICO V2 Auto',
    'FICO 08',
    'FICO 08 Auto',
    'FICO 09',
    'FICO 09 Auto',
    'BK MDS',
    'BK Plus Rescaled',
    'Vantage Score 3.0',
    'Vantage Score 4.0'
  ];
  public barChartType5: ChartType = 'bar';
  public barChartLegend5 = false;
  public barChartPlugin5: any = [];

  public barChartData5: ChartDataSets[] = [
    { data: [6799, 6799, 6744, 6744, 6741, 6741, 6972, 6855, 7043, 7043], label: '', stack: 'a' },
    { data: [561, 561, 550, 550, 550, 550, 593, 564, 603, 604], label: '', stack: 'b' }
  ];

  constructor() {}

  ngOnInit() {}
}
