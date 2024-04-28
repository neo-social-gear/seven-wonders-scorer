import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'seven-wonders-scorer-user-card',
  templateUrl: 'user-card.component.html',
  styleUrls: ['user-card.component.scss'],
})
export class UserCardComponent {
  @Input() score: any;
}
