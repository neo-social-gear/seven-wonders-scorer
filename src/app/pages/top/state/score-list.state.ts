import { Injectable, signal } from '@angular/core';
import { SignalState } from '../../../types/signal-state';
import { Score, ScoreType } from './score.state';

export type State = {
  scores: Score[];
};

@Injectable()
export class ScoreListState implements SignalState<State> {
  #scoreList = signal<Score[]>([]);

  /**
   * add new user to score list
   * @param userName target username
   */
  public addUser(userName: string): void {
    const newUser: Score = {
      userName: userName,
      civilScore: 0,
      militaryScore: 0,
      scienceScore: {
        gear: 0,
        compass: 0,
        tablet: 0,
      },
      commercialScore: 0,
      guildScore: 0,
      cityScore: 0,
      leaderScore: 0,
      coinScore: 0,
      wonderScore: 0,
    };
    this.#scoreList.update((scores) => [...scores, newUser]);
  }

  /**
   * remove user from score list
   * @param userName target username
   */
  public removeUser(userName: string): void {
    this.#scoreList.update((scores) => {
      return scores.filter((score) => score.userName !== userName);
    });
  }

  /**
   * update civilization score
   * @param userName target username
   * @param score updated score
   */
  public updateCivilScore(userName: string, score: number): void {
    this.updateScore(userName, score, ScoreType['Civilization']);
  }
  /**
   * update military score
   * @param userName target username
   * @param score updated score
   */
  public updateMilitaryScore(userName: string, score: number): void {
    this.updateScore(userName, score, ScoreType['Military']);
  }
  /**
   * update science score
   * @param userName target username
   * @param score updated score
   */
  public updateScienceScore(userName: string, score: number): void {
    this.updateScore(userName, score, ScoreType['Science']);
  }
  /**
   * update commercial score
   * @param userName target username
   * @param score updated score
   */
  public updateCommercialScore(userName: string, score: number): void {
    this.updateScore(userName, score, ScoreType['Commercial']);
  }
  /**
   * update guild score
   * @param userName target username
   * @param score updated score
   */
  public updateGuildScore(userName: string, score: number): void {
    this.updateScore(userName, score, ScoreType['Guild']);
  }
  /**
   * update city score
   * @param userName target username
   * @param score updated score
   */
  public updateCityScore(userName: string, score: number): void {
    this.updateScore(userName, score, ScoreType['City']);
  }
  /**
   * update leader score
   * @param userName target username
   * @param score updated score
   */
  public updateLeaderScore(userName: string, score: number): void {
    this.updateScore(userName, score, ScoreType['Leader']);
  }
  /**
   * update coin score
   * @param userName target username
   * @param score updated score
   */
  public updateCoinScore(userName: string, score: number): void {
    this.updateScore(userName, score, ScoreType['Coin']);
  }
  /**
   * update wonder score
   * @param userName target username
   * @param score updated score
   */
  public updateWonderScore(userName: string, score: number): void {
    this.updateScore(userName, score, ScoreType['Wonder']);
  }

  /**
   * get readonly state
   */
  public asReadonly() {
    return {
      scores: this.#scoreList.asReadonly(),
    };
  }

  /**
   * update score
   * @param userName target username
   * @param score updated score
   * @param scoreType score type
   * @private
   */
  private updateScore(
    userName: string,
    score: number,
    scoreType: ScoreType
  ): void {
    this.#scoreList.update((scores) => {
      return scores.map((s) => {
        if (s.userName === userName) {
          return {
            ...s,
            [scoreType]: score,
          };
        }
        return s;
      });
    });
  }
}
