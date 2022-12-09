import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { FeeGenerationComponent } from './fee-generation.component';
import { FeeGenerationRoutingModule } from './fee-generation-routing.module';

@NgModule({
    declarations: [
      FeeGenerationComponent
    ],
    imports: [
      CommonModule,
      FeeGenerationRoutingModule,
      SharedModule
    ]
  })
  export class FeeGenerationModule { }
  