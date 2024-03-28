import { Injectable } from '@angular/core';
import { ScoreListState } from '../state/score-list.state';

@Injectable()
export class CalculateScoreService {
  #state = new ScoreListState();
  state = this.#state.asReadonly();

  public addUser(userName: string): void {
    this.#state.addUser(userName);
  }
}
