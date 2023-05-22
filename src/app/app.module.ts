import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import axios from 'axios';
import { OSOSApiService } from './osos-api.service';

@NgModule({
  declarations: [AppComponent, TaskComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [OSOSApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
