import { NgModule } from '@angular/core';

import { TopComponent } from './top.component';
import { RouterModule } from '@angular/router';
import { topRoutes } from './top.routes';
import { ScoreService } from './services/score.service';
import { CommonModule } from '@angular/common';
import { ScoreListState } from './state/score-list.state';
import { UserService } from './services/user.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    RouterModule.forChild(topRoutes),
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [],
  declarations: [TopComponent],
  providers: [ScoreService, UserService, ScoreListState],
})
export class TopModule {}
