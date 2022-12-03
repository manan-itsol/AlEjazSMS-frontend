import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BranchRoutingModule } from './branch-routing.module';
import { BranchComponent } from './branch.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    BranchComponent
  ],
  imports: [
    CommonModule,
    BranchRoutingModule,
    SharedModule
  ]
})
export class BranchModule { }
