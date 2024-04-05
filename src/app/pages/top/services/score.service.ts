import { Injectable } from '@angular/core';
import { ScoreListState } from '../state/score-list.state';

@Injectable()
export class ScoreService {
  readonly #state;
  constructor(private readonly scoreListState: ScoreListState) {
    this.#state = scoreListState.asReadonly();
  }

  public getScore() {
    return this.#state.scores();
  }
}
