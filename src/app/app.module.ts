import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabellaComponent } from './tabella/tabella.component';
import {MatTableModule} from '@angular/material/table';
@NgModule({
  declarations: [
    AppComponent,
    TabellaComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    BrowserAnimationsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
