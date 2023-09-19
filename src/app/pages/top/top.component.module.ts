import { NgModule } from '@angular/core';

import { TopComponent } from './top.component';
import { RouterModule } from '@angular/router';
import { topRoutes } from './top.routes';

@NgModule({
  imports: [RouterModule.forChild(topRoutes)],
  exports: [],
  declarations: [TopComponent],
  providers: [],
})
export class TopModule {}
