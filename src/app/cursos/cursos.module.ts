import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos/cursos.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';


@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    AppMaterialModule
  ]
})
export class CursosModule { }
