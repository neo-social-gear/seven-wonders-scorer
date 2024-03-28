import { signal } from '@angular/core';
import { SignalState } from '../../../types/signal-state';
import { Score } from './score.state';

export type State = {
  scores: Score[];
};

export class ScoreListState implements SignalState<State> {
  #scoreList = signal<Score[]>([]);

  public addUser(userName: string): void {
    const newUser: Score = {
      userName: userName,
      civilScore: 0,
      militaryScore: 0,
      scienceScore: 0,
      commercialScore: 0,
      guildScore: 0,
      cityScore: 0,
      leaderScore: 0,
      coinScore: 0,
      wonderScore: 0,
      sum: function () {
        return (
          this.civilScore +
          this.militaryScore +
          this.scienceScore +
          this.commercialScore +
          this.guildScore +
          this.cityScore +
          this.leaderScore +
          this.coinScore +
          this.wonderScore
        );
      },
    };
    this.#scoreList.update((scores) => [...scores, newUser]);
  }

  public setScore(
    userName: string,
    updatedScore: Readonly<{ type: string; score: number }>
  ): void {
    this.#scoreList.update((scores) => {
      return scores.map((score) => {
        if (score.userName === userName) {
          return {
            ...score,
            [updatedScore.type]: updatedScore.score,
          };
        }
        return score;
      });
    });
  }

  public asReadonly() {
    return {
      scores: this.#scoreList.asReadonly(),
    };
  }
}
