import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionRoutingModule } from './section-routing.module';
import { SectionComponent } from './section.component';
import { SharedModule } from '../shared/shared.module';
import { SearchBoxModule } from '../components/search-box/search-box.module';


@NgModule({
  declarations: [
    SectionComponent
  ],
  imports: [
    CommonModule,
    SearchBoxModule,
    SectionRoutingModule,
    SharedModule
  ]
})
export class SectionModule { }
