import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardEditComponent } from './dashboard-edit/dashboard-edit.component';
import { BarChartComponent } from './charts-types/bar/bar.component';
import { DoughnutComponent } from './charts-types/doughnut/doughnut.component';

import { ChartsModule } from 'ng2-charts';
import { PieeComponent } from './charts-types/piee/piee.component';

// Angular material
import {MatTabsModule} from '@angular/material/tabs'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent,
    DashboardEditComponent,
    BarChartComponent,
    DoughnutComponent,
    PieeComponent,
  ],
  exports: [
    DashboardComponent,
    PagesComponent,
  ],
  imports: [ 
    CommonModule,
    SharedModule,
    RouterModule,
    ChartsModule,
    MatTabsModule,
    BrowserAnimationsModule,
    FormsModule
  ]
})
export class PagesModule { }
