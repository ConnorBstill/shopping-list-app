import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CarsService } from './cars.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
// import { MyComponentComponent } from './my-component/my-component.component';
import { MyComponentModule } from './my-component/my-component.module';
import { ExampleComponent } from './example/example.component';
import { HeaderComponent } from './admin/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    // MyComponentComponent,
    ExampleComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    MyComponentModule
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
