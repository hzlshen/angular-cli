import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from "./app.component";
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


//响应式表单需要引入ReactiveFormsModule
@NgModule({
  declarations: [
    AppComponent,
    Tem,
    ReactiveFormComponentplateFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
