import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-semidonut',
  templateUrl: './semidonut.component.html',
  styleUrls: ['./semidonut.component.css']
})
export class SemidonutComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options;

  constructor() {
    const minKw = 0;
    const maxKw = 12.35;
    this.chartOptions = {
      chart: {
        type: 'pie',
        backgroundColor: 'transparent',
        plotBorderWidth: 0,
        plotShadow: false
      },
      title: {
        text: '<span style="font-size: 20px;color:green;margin-top:-30px">8.28kW</span><br><span style="font-size: 12px;">Real Time Power</span>',
        align: 'center',
        verticalAlign: 'middle',
        y: 40
        
      },
      tooltip: {
        pointFormat: '{name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: true,
            distance: -50,
            style: {
              fontWeight: 'bold',
              color: 'grey' 
            }
            
          },

          startAngle: -90,
          endAngle: 90,
          center: ['50%', '75%'],
          size: '150%'
        }
      },
      series: [{
        type: 'pie',
        // name: 'Utilization',
        innerSize: '60%',
        data: [
          {
            name: 'Utilization',
            y: 828,
            color: 'green',
            dataLabels: {
              enabled: false,
            }
          },
          {
            name: 'Unused',
            y: 1235 - 828,
            color: 'grey',
            dataLabels: {
              enabled: false,
            }
          }
        ]
      }],      
      credits: {
        enabled: false
      },
      exporting:{
        enabled:false
      }
    };
  }

  ngOnInit(): void {
  }
}
