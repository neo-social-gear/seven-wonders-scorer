import { Injectable } from '@angular/core';
import { ScoreListState } from '../state/score-list.state';

@Injectable()
export class UserService {
  constructor(private readonly scoreListState: ScoreListState) {}

  public addUser(userName: string): void {
    this.scoreListState.addUser(userName);
  }
}
