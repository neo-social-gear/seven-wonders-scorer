import { NgModule } from '@angular/core';

import { TopComponent } from './top.component';
import { RouterModule } from '@angular/router';
import { topRoutes } from './top.routes';
import { CalculateScoreService } from './services/calculate-score.service';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [RouterModule.forChild(topRoutes), CommonModule],
  exports: [],
  declarations: [TopComponent],
  providers: [CalculateScoreService],
})
export class TopModule {}
