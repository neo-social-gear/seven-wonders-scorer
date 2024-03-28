import { Component, Signal } from '@angular/core';
import { CalculateScoreService } from './services/calculate-score.service';
import { Score } from './state/score.state';

@Component({
  selector: 'seven-wonders-scorer-top',
  templateUrl: 'top.component.html',
})
export class TopComponent {
  scoreState: { scores: Signal<Score[]> };
  constructor(private calculateScoreService: CalculateScoreService) {
    this.scoreState = this.calculateScoreService.state;
  }

  public addUser(): void {
    // TODO: current code is debug code. Remove this code after implementing the UI.
    this.calculateScoreService.addUser('Alice');
    this.calculateScoreService.addUser('Bob');
    this.calculateScoreService.addUser('Charlie');
  }
}
