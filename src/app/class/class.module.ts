import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassRoutingModule } from './class-routing.module';
import { ClassComponent } from './class.component';
import { SharedModule } from '../shared/shared.module';
import { JoinPipe } from '../shared/utils/join.pipe';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [
    ClassComponent,
    JoinPipe
  ],
  imports: [
    CommonModule,
    ClassRoutingModule,
    NgMultiSelectDropDownModule.forRoot(),
    SharedModule
  ]
})
export class ClassModule { }
