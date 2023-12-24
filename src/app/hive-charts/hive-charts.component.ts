import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsExporting from 'highcharts/modules/exporting';
import { ApivaluesService } from 'src/Services/apivalues.service';
 
HighchartsMore(Highcharts);
HighchartsExporting(Highcharts);
interface CustomPoint extends Highcharts.Point {
  value: number;
}

@Component({
  selector: 'app-hive-charts',
  templateUrl: './hive-charts.component.html',
  styleUrls: ['./hive-charts.component.css']
})
export class HiveChartsComponent implements OnInit {
  popupVisible = false;
  name = 'Angular Iframe Src';
  url: string = 'http://192.168.32.242:8080/superset/dashboard/11/';
  urlSafe!: SafeResourceUrl;
  latitude = 39.55;
  longitude = 105.5;
  getWeatherData:any;
  temperature:any;
  weatherName:any;

  constructor(private popupService: ApivaluesService, public sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);

    this.popupService.popupVisible$.subscribe((visible) => {
      this.popupVisible = visible;
    });
    this.popupService.getWeather(this.latitude,this.longitude).subscribe((data)=>{
      this.getWeatherData=data;
      this.temperature=this.getWeatherData.main.temp;
      this.weatherName=this.getWeatherData.name;


    })
  }

  togglePopup() {
    if (this.popupVisible) {
      this.popupService.hidePopup();
    } else {
      this.popupService.showPopup();
    }
  }

  openInIframe() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    const iframe = document.getElementById('myIframe') as HTMLIFrameElement;
    iframe.src = this.url;
  }
}

