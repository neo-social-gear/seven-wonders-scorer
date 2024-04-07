import { Injectable } from '@angular/core';
import { ScoreListState } from '../state/score-list.state';
import { ScoreType } from '../state/score.state';

@Injectable()
export class ScoreService {
  readonly #state;
  constructor(private readonly scoreListState: ScoreListState) {
    this.#state = scoreListState.asReadonly();
  }

  public updateScore(username: string, score: number, scoreType: ScoreType) {
    switch (scoreType) {
      case ScoreType['Civilization']:
        this.scoreListState.updateCivilScore(username, score);
        break;
      case ScoreType['Military']:
        this.scoreListState.updateMilitaryScore(username, score);
        break;
      case ScoreType['Science']:
        this.scoreListState.updateScienceScore(username, score);
        break;
      case ScoreType['Commercial']:
        this.scoreListState.updateCommercialScore(username, score);
        break;
      case ScoreType['Guild']:
        this.scoreListState.updateGuildScore(username, score);
        break;
      case ScoreType['City']:
        this.scoreListState.updateCityScore(username, score);
        break;
      case ScoreType['Leader']:
        this.scoreListState.updateLeaderScore(username, score);
        break;
      case ScoreType['Coin']:
        this.scoreListState.updateCoinScore(username, score);
        break;
      case ScoreType['Wonder']:
        this.scoreListState.updateWonderScore(username, score);
        break;
      default:
        throw new Error(`Unknown score type: ${scoreType}`);
    }
  }

  public getScore() {
    return this.#state.scores().map((score) => {
      const scienceSet = Math.min(
        score.scienceScore.compass,
        score.scienceScore.gear,
        score.scienceScore.tablet
      );
      const scienceScoreSum =
        scienceSet * 7 +
        (score.scienceScore.gear > 0
          ? Math.pow(score.scienceScore.gear, score.scienceScore.gear)
          : 0) +
        (score.scienceScore.compass > 0
          ? Math.pow(score.scienceScore.compass, score.scienceScore.compass)
          : 0) +
        (score.scienceScore.tablet > 0
          ? Math.pow(score.scienceScore.tablet, score.scienceScore.tablet)
          : 0);
      const scoreSum = Object.values(score).reduce(
        (sum: number, value): number => {
          if (typeof value === 'number') {
            return sum + value;
          }
          return sum;
        },
        0
      );

      return {
        ...score,
        scienceScore: {
          ...score.scienceScore,
          sum: scienceScoreSum,
        },
        sum: scoreSum,
      };
    });
  }
}
