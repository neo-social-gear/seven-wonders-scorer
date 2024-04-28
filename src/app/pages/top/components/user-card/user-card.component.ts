import { Component, Input } from '@angular/core';
import type { Score } from '../../types/score';
import type { Optional } from '../../../../types/utility';

@Component({
  selector: 'seven-wonders-scorer-user-card',
  templateUrl: 'user-card.component.html',
  styleUrls: ['user-card.component.scss'],
})
export class UserCardComponent {
  @Input() score: Optional<Score>;
}
