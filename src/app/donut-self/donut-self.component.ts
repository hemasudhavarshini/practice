
import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsExporting from 'highcharts/modules/exporting';
import HC_exporting from 'highcharts/modules/exporting';

 
HighchartsMore(Highcharts);
HighchartsExporting(Highcharts);
 
interface CustomPoint extends Highcharts.Point {
  value: number;
}
 
@Component({
  selector: 'app-donut-self',
  templateUrl: './donut-self.component.html',
  styleUrls: ['./donut-self.component.css']
})
export class DonutSelfComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options;
 
  constructor() {
    this.chartOptions = {
      chart: {
        type: 'pie'
      },
      title: {
        text: '',
       
      },
      legend: {
        enabled: false,
        labelFormatter: function () {
          const point = this as CustomPoint
          return `<div style="display: flex; align-items: center;">
                    <img src="${point.options?.marker?.symbol}" style="width: 20px; height: 20px; margin-right: 5px;" />
                    <div>${this.name}</div>
                  </div>
                  <span style="color: ${this.color}">${point.value}%</span>`;
 
        },
       
       
       
       
       
       
       
       
       
       
        align: 'right',
        verticalAlign: 'middle',
        layout: 'vertical',
        itemStyle: {
          color: 'black',
          fontWeight: 'bold'  
         
        },
        itemHoverStyle: {
          color: 'red'  
        }
      },
      tooltip: {
        formatter: function () {
          return `<b>${this.point.name}</b>: ${this.y}%`;
        },
      },
      plotOptions: {
        pie: {
          innerSize: '60%',
          dataLabels: {
            enabled: false,
          },
          showInLegend: true
        }
      },
      series: [{
        type: 'pie',
        data: [
          { name: 'From Solar', y: 55, value: 55, color: '#cea90f',
            marker: {
              symbol: 'https://cdn-icons-png.flaticon.com/128/978/978022.png',
            },
          },
          { name: 'From Battery', y: 40, value: 40, color: 'green',
            marker: {
              symbol: 'https://cdn-icons-png.flaticon.com/128/978/978022.png',
            },
          },
          {
             name: 'From Grid', y: 5, value: 5, color: '#5b3289',
            marker: {
              symbol: 'https://cdn-icons-png.flaticon.com/128/978/978022.png',
            },
          }
        ]
      }],
     
     
      exporting: {
        enabled: false
      },
      credits: {
        enabled: false
      },
     
      colors: ['#cea90f', 'green', '#5b3289'],
     
    };
   
  }
 
 
}
 