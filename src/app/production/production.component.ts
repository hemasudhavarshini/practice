import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsExporting from 'highcharts/modules/exporting';

HighchartsMore(Highcharts);
HighchartsExporting(Highcharts);

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.css']
})
export class ProductionComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    chart: {
      type: 'column',
    },
    title: {
      text: '',
      align: 'left',
    },
    subtitle: {
      text: '',
      align: 'left',
    },
    xAxis: {
      categories: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'TODAY'],
      crosshair: true,
      accessibility: {
        description: 'Countries',
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: 'kWh',
      },
      tickPositions: [0, 20, 40, 60],
    },
    tooltip: {
      valueSuffix: ' (kWh)',
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    legend: {
      enabled: false 
    },
    series: [
      {
        type: 'column',
        data: [50, 20, 40, 60, 40, 20, 30],
        color: 'green',
      }
    ],
    exporting: {
      enabled: false
    }
  };

  constructor() { }

  ngOnInit(): void {
  }
}
