import { Component, OnInit } from '@angular/core';
import { ApivaluesService } from 'src/Services/apivalues.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  popupVisible = true;
  currentDate: string;
  currentTime: string;
  weatherData: any;
  latitude = 39.55;
  longitude = 105.5;
  country: any;
  temp: any;
  minTemp: any;
  maxTemp: any;
  description: any;
  sunrise: any;
  sunset: any;
  formattedSunrise!: string;
  formattedSunset!: string;

  constructor(private weatherService: ApivaluesService) {
    const currentDateTime = new Date();
    this.currentDate = this.formatDate(currentDateTime);
    this.currentTime = this.formatTime(currentDateTime);
  }

  ngOnInit(): void {
    this.weatherService.popupVisible$.subscribe((visible) => {
      this.popupVisible = visible;
    });

    this.weatherService.getWeather(this.latitude, this.longitude).subscribe(
      (data) => {
        this.weatherData = data;
        console.log(data);
        this.country = this.weatherData.sys.country;
        this.temp = this.weatherData.main.temp;
        this.minTemp = this.weatherData.main.temp_min;
        this.maxTemp = this.weatherData.main.temp_max;
        this.description = this.weatherData.name;
        this.sunrise = this.weatherData.sys.sunrise;
        this.sunset = this.weatherData.sys.sunset;
        this.formattedSunrise = this.convertTimestampToIST(this.sunrise);
        this.formattedSunset = this.convertTimestampToIST(this.sunset);
      },
    );
  }

  closePopup() {
    this.weatherService.hidePopup();
  }

  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  private formatTime(date: Date): string {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  // private convertTimestampToIST(timestamp: number): string {
  //   const date = new Date(timestamp * 1000);
  //   const options = { timeZone: 'Asia/Kolkata', hour12: false };
  
  //   const hours = date.getHours().toString().padStart(2, '0');
  //   const minutes = date.getMinutes().toString().padStart(2, '0');
  
  //   return `${hours}:${minutes}`;
  // }
  private convertTimestampToIST(timestamp: number): string {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
  
    const ampm = hours >= 12 ? 'pm' : 'am';
    const formattedHours = hours % 12 || 12; 
  
    const formattedHoursString = formattedHours.toString().padStart(2, '0');
    const formattedMinutesString = minutes.toString().padStart(2, '0');
  
    return `${formattedHoursString}:${formattedMinutesString} ${ampm}`;
  }
  
  
}
