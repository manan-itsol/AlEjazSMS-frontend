import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeeGenerationComponent } from './fee-generation.component';

const routes: Routes = [{ path: '', component: FeeGenerationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeeGenerationRoutingModule { }
