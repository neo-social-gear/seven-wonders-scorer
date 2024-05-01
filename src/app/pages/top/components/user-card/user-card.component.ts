import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import type { Score } from '../../types/score';

@Component({
  selector: 'seven-wonders-scorer-user-card',
  templateUrl: 'user-card.component.html',
  styleUrls: ['user-card.component.scss'],
})
export class UserCardComponent implements OnChanges {
  @Input({ required: true }) score!: Score;

  public ngOnChanges(changes: SimpleChanges) {
    console.log('changes', changes);
    if ('score' in changes && changes['score'].currentValue == null) {
      throw new Error(`score is required.`);
    }
  }
}
