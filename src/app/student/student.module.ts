import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { SharedModule } from '../shared/shared.module';
import { NgxMaskModule } from 'ngx-mask'
import { SearchBoxModule } from '../components/search-box/search-box.module';


@NgModule({
  declarations: [
    StudentComponent
  ],
  imports: [
    CommonModule,
    SearchBoxModule,
    StudentRoutingModule,
    SharedModule,
    NgxMaskModule.forRoot(),
  ]
})
export class StudentModule { }
