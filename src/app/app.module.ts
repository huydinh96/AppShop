// Libaries
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// End Libaries

// Component  && Module
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { ProductModule } from './products/products.module';
import { MaterialModule } from './material/material.module';
// End Component  && Module

// Service
import { ProductsService } from './providers/products.service';
// End Service

// Router
import { appRoute } from './app.routes';
// End Router
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    ProductModule,
    RouterModule.forRoot(appRoute),
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
