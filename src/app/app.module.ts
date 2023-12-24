import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { PasswordCheckComponent } from './password-check/password-check.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { HiveChartsComponent } from './hive-charts/hive-charts.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuModule } from 'primeng/menu';
import { HighchartsChartModule } from 'highcharts-angular';
import { SemidonutComponent } from './semidonut/semidonut.component';
import { StatusvaluesComponent } from './statusvalues/statusvalues.component';
import { DonutSelfComponent } from './donut-self/donut-self.component';
import { RealTimeStatusComponent } from './real-time-status/real-time-status.component';
import { WeatherComponent } from './weather/weather.component';
import { HttpClientModule } from '@angular/common/http';
import { ApivaluesService } from 'src/Services/apivalues.service';
import { StatusDisplayComponent } from './status-display/status-display.component';
import { TestComponent } from './test/test.component';
import { ProductionComponent } from './production/production.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    PasswordCheckComponent,
    HiveChartsComponent,
    SemidonutComponent,
    StatusvaluesComponent,
    DonutSelfComponent,
    RealTimeStatusComponent,
    WeatherComponent,
    StatusDisplayComponent,
    TestComponent,
    ProductionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    PasswordModule,
    ButtonModule,
    CardModule,
    PanelModule,
    TabMenuModule,
    MenuModule,
    HighchartsChartModule,
    HttpClientModule
  ],
  providers: [ApivaluesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
