import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { CurrencyComponent } from './components/currency/currency.component';
import { ConversionPipe } from './pipes/conversion.pipe';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { ModelDrivenComponent } from './forms/model-driven/model-driven.component';
import { ZipCodeDirective } from './directives/zip-code.directive';
import { ShowErrorsComponent } from './forms/show-errors/show-errors.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { CurrencyService } from './services/currency.service';
import { UiModule } from './ui/ui.module';

@NgModule({
  declarations: [
    //component,pipes,directives
    AppComponent,
    DemoComponent,
    ProductComponent,
    ProductListComponent,
    CurrencyComponent,
    ConversionPipe,
    TemplateDrivenComponent,
    ModelDrivenComponent,
    ZipCodeDirective,
    ShowErrorsComponent,
    ErrorPageComponent
  ],
  imports: [
    //modules
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    UiModule
  ],
  providers: [
    //services
    CurrencyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
