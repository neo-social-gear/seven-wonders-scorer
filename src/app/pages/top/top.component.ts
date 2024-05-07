import { Component } from '@angular/core';
import { ScoreService } from './services/score.service';
import { UserService } from './services/user.service';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';

interface UpdateScoreForm {
  username: FormControl<string>;
  civilizationScore: FormControl<number>;
  militaryScore: FormControl<number>;
  scienceScore: FormGroup<{
    gear: FormControl<number>;
    compass: FormControl<number>;
    tablet: FormControl<number>;
  }>;
  commercialScore: FormControl<number>;
  guildScore: FormControl<number>;
  cityScore: FormControl<number>;
  leaderScore: FormControl<number>;
  coinScore: FormControl<number>;
  wonderScore: FormControl<number>;
}

@Component({
  selector: 'seven-wonders-scorer-top',
  templateUrl: 'top.component.html',
})
export class TopComponent {
  public updateScoreForm: FormGroup<UpdateScoreForm>;
  public showModal = false;
  public username = '';

  // public updateScoreForm;

  constructor(
    private readonly scoreService: ScoreService,
    private readonly userService: UserService,
    private readonly formBuilder: NonNullableFormBuilder
  ) {
    this.userService.addUser('Alice');
    this.userService.addUser('Bob');
    this.userService.addUser('Charlie');

    this.updateScoreForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      civilizationScore: [0, [Validators.min(0)]],
      militaryScore: [0, [Validators.min(0)]],
      scienceScore: this.formBuilder.group({
        gear: [0, [Validators.min(0)]],
        compass: [0, [Validators.min(0)]],
        tablet: [0, [Validators.min(0)]],
      }),
      commercialScore: [0, [Validators.min(0)]],
      guildScore: [0, [Validators.min(0)]],
      cityScore: [0, [Validators.min(0)]],
      leaderScore: [0, [Validators.min(0)]],
      coinScore: [0, [Validators.min(0)]],
      wonderScore: [0, [Validators.min(0)]],
    });
  }

  public addUser(): void {
    // TODO: current code is debug code. Remove this code after implementing the UI.
    this.userService.addUser('Alice');
    this.userService.addUser('Bob');
    this.userService.addUser('Charlie');
  }

  public updateScore() {
    if (!this.updateScoreForm.valid) {
      throw new Error(`updateScoreForm is invalid`);
    }
    this.scoreService.updateScore(
      this.updateScoreForm.controls.username.value,
      {
        civilScore: this.updateScoreForm.controls.civilizationScore.value,
        militaryScore: this.updateScoreForm.controls.militaryScore.value,
        scienceScore: {
          gear: this.updateScoreForm.controls.scienceScore.controls.gear.value,
          compass:
            this.updateScoreForm.controls.scienceScore.controls.compass.value,
          tablet:
            this.updateScoreForm.controls.scienceScore.controls.tablet.value,
        },
        commercialScore: this.updateScoreForm.controls.commercialScore.value,
        guildScore: this.updateScoreForm.controls.guildScore.value,
        cityScore: this.updateScoreForm.controls.cityScore.value,
        leaderScore: this.updateScoreForm.controls.leaderScore.value,
        coinScore: this.updateScoreForm.controls.coinScore.value,
        wonderScore: this.updateScoreForm.controls.wonderScore.value,
      }
    );
  }

  public openModal(username: string) {
    this.showModal = true;
    this.username = username;
  }

  public closeModal() {
    this.showModal = false;
    this.username = '';
  }

  public get scores() {
    return this.scoreService.getScore();
  }
}
