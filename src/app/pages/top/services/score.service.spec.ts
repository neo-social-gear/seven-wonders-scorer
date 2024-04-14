import { TestBed } from '@angular/core/testing';
import { ScoreService } from './score.service';
import { ScoreListState } from '../state/score-list.state';

describe('ScoreService', () => {
  let service: ScoreService;
  let scoreListStateMock: jest.Mocked<ScoreListState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ScoreService,
        { provide: ScoreListState, useValue: ScoreListState },
      ],
    });
    service = TestBed.inject(ScoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('スコア更新ができること', () => {
    const mockUsername = 'Test';
    const mockScore = {
      civilScore: 10,
      militaryScore: 10,
      scienceScore: {
        gear: 3,
        compass: 4,
        tablet: 5,
      },
      commercialScore: 6,
      guildScore: 7,
      cityScore: 8,
      leaderScore: 9,
      coinScore: 10,
      wonderScore: 11,
    };
    service.updateScore(mockUsername, mockScore);

    expect(scoreListStateMock.updateCivilScore).toHaveBeenCalledWith(
      mockUsername,
      mockScore.civilScore
    );
    expect(scoreListStateMock.updateMilitaryScore).toHaveBeenCalledWith(
      mockUsername,
      mockScore.militaryScore
    );
    expect(scoreListStateMock.updateScienceScore).toHaveBeenCalledWith(
      mockUsername,
      {
        gear: mockScore.scienceScore.gear,
        compass: mockScore.scienceScore.compass,
        tablet: mockScore.scienceScore.tablet,
      }
    );
    expect(scoreListStateMock.updateCommercialScore).toHaveBeenCalledWith(
      mockUsername,
      mockScore.commercialScore
    );
    expect(scoreListStateMock.updateGuildScore).toHaveBeenCalledWith(
      mockUsername,
      mockScore.guildScore
    );
    expect(scoreListStateMock.updateCityScore).toHaveBeenCalledWith(
      mockUsername,
      mockScore.cityScore
    );
    expect(scoreListStateMock.updateLeaderScore).toHaveBeenCalledWith(
      mockUsername,
      mockScore.leaderScore
    );
    expect(scoreListStateMock.updateCoinScore).toHaveBeenCalledWith(
      mockUsername,
      mockScore.coinScore
    );
    expect(scoreListStateMock.updateWonderScore).toHaveBeenCalledWith(
      mockUsername,
      mockScore.wonderScore
    );
  });
});
