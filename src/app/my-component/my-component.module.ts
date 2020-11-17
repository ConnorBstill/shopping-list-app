import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MyComponentComponent } from './my-component.component';

import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    MyComponentComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [MyComponentComponent],
  bootstrap: [MyComponentComponent]
})
export class MyComponentModule { }
