import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MyComponentComponent } from './my-component.component';

@NgModule({
  declarations: [
    MyComponentComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  exports: [MyComponentComponent],
  bootstrap: [MyComponentComponent]
})
export class MyComponentModule { }
