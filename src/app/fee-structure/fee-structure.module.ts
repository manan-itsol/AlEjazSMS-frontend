import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { FeeStructureComponent } from './fee-structure.component';
import { FeeStructureRoutingModule } from './fee-structure-routing.module';

@NgModule({
    declarations: [
      FeeStructureComponent
    ],
    imports: [
      CommonModule,
      FeeStructureRoutingModule,
      SharedModule
    ]
  })
  
  export class FeeStructureModule { }