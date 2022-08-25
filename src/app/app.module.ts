import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NameSeterComponent } from './name-seter/name-seter.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ClockComponent } from './clock/clock.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HomeModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    NameSeterComponent,
    CalculatorComponent,
    ClockComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
