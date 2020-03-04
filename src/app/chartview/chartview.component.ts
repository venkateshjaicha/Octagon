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
    { data: [25.54, 25.97, 25.39, 27.26, 25.25, 25.68, 16.79, 13.77, 28.12, 30.27], label: '' }
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
    { data: [52.18, 53.09, 51.99, 55.41, 53.64, 53.97, 35.65, 35.56, 52.56, 57.04], label: '' }
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
    { data: [37.6, 37.7, 36.7, 39.3, 38.6, 38.8, 26.5, 29.5, 36.5, 41.2], label: '' }
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
    { data: [42.32, 43.62, 39.88, 44.33, 41.61, 41.61, 30.56, 26.54, 44.47, 47.06], label: '' }
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
    { data:  [8171, 8064, 8111, 8111, 8109, 8109, 8364, 8262, 8460, 8459], label: '', stack: 'a' },
    { data: [596, 596, 584, 584, 584, 584, 635, 608, 647, 648], label: '', stack: 'b' }
  ];

  constructor() {}

  ngOnInit() {}
}
