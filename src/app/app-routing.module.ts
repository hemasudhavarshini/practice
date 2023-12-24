import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { PasswordCheckComponent } from './password-check/password-check.component';
import { HiveChartsComponent } from './hive-charts/hive-charts.component';

const routes: Routes = [
  {
    path:'',
    component:LoginpageComponent
  },
  {
    path:'password',
    component:PasswordCheckComponent,
  },
  {
    path:'login',
    component:LoginpageComponent
  },
  {
    path:'hivecharts',
    component:HiveChartsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
