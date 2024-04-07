import { Component } from '@angular/core';
import { ScoreService } from './services/score.service';
import { Score } from './state/score.state';
import { UserService } from './services/user.service';

@Component({
  selector: 'seven-wonders-scorer-top',
  templateUrl: 'top.component.html',
})
export class TopComponent {
  constructor(
    private readonly scoreService: ScoreService,
    private readonly userService: UserService
  ) {}

  public addUser(): void {
    // TODO: current code is debug code. Remove this code after implementing the UI.
    this.userService.addUser('Alice');
    this.userService.addUser('Bob');
    this.userService.addUser('Charlie');
  }

  public get scores() {
    return this.scoreService.getScore();
  }
}
