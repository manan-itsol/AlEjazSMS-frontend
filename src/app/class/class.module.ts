import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassRoutingModule } from './class-routing.module';
import { ClassComponent } from './class.component';
import { SharedModule } from '../shared/shared.module';
import { JoinPipe } from '../shared/utils/join.pipe';


@NgModule({
  declarations: [
    ClassComponent,
    JoinPipe
  ],
  imports: [
    CommonModule,
    ClassRoutingModule,
    SharedModule
  ]
})
export class ClassModule { }
