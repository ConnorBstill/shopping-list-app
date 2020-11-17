import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './admin/header/header.component';
import { ExampleComponent } from './example/example.component';

const routes: Routes = [
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'example',
    component: ExampleComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
