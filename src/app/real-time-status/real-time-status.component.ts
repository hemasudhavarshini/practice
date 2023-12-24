import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/highcharts';
import HighchartsNetworkgraph from 'highcharts/modules/networkgraph';
interface NetworkgraphData {
  from: string;
  to: string;
}
HighchartsNetworkgraph(Highcharts);

@Component({
  selector: 'app-real-time-status',
  templateUrl: './real-time-status.component.html',
  styleUrls: ['./real-time-status.component.css']
})
export class RealTimeStatusComponent implements AfterViewInit {

  ngAfterViewInit() {
    const chartOptions: Highcharts.Options = {
      chart: {
        type: 'networkgraph',
        height: '400px',
        renderTo: 'chart-container',
      },
      title: {
        text: '',
      },
      plotOptions: {
        networkgraph: {
          keys: ['from', 'to'],
        },
      },
      series: [
        {
          data: [
            {
              from: 'Solar',
              to: 'Invertor',
            },
            {
              from: 'Invertor',
              to: 'house',
            },
            {
              from: 'Invertor',
              to: 'Battery',
            },
            {
              from: 'Invertor',
              to: 'power',
            },
            
          ] as NetworkgraphData[],
        } as any,
      ],
      exporting: {
        enabled: false
      },
      credits: {
        enabled: false
      },
    };

    Highcharts.chart(chartOptions);
  }
}

