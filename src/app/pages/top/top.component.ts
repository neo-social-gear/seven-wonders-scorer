import { Component, OnInit } from '@angular/core';
import { ScoreService } from './services/score.service';
import { UserService } from './services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'seven-wonders-scorer-top',
  templateUrl: 'top.component.html',
})
export class TopComponent {
  public updateScoreForm: FormGroup;

  constructor(
    private readonly scoreService: ScoreService,
    private readonly userService: UserService,
    private readonly formBuilder: FormBuilder
  ) {
    this.userService.addUser('Alice');
    this.userService.addUser('Bob');
    this.userService.addUser('Charlie');

    this.updateScoreForm = this.formBuilder.nonNullable.group({
      username: ['', Validators.required],
      civilizationScore: [0, Validators.minLength(0)],
      militaryScore: [0, Validators.minLength(0)],
      scienceScore: this.formBuilder.nonNullable.group({
        gear: [0, Validators.minLength(0)],
        compass: [0, Validators.minLength(0)],
        tablet: [0, Validators.minLength(0)],
      }),
      commercialScore: [0, Validators.minLength(0)],
      guildScore: [0, Validators.minLength(0)],
      cityScore: [0, Validators.minLength(0)],
      leaderScore: [0, Validators.minLength(0)],
      coinScore: [0, Validators.minLength(0)],
      wonderScore: [0, Validators.minLength(0)],
    });
  }

  public addUser(): void {
    // TODO: current code is debug code. Remove this code after implementing the UI.
    this.userService.addUser('Alice');
    this.userService.addUser('Bob');
    this.userService.addUser('Charlie');
  }

  public updateScore() {
    console.log(this.updateScoreForm.value);
  }

  public get scores() {
    return this.scoreService.getScore();
  }
}
