import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'seven-wonders-scorer-score-update-modal',
  templateUrl: 'score-update-modal.component.html',
})
export class ScoreUpdateModalComponent {
  @Output() closeModalEvent: EventEmitter<void> = new EventEmitter<void>();

  #username: string | undefined;
  #showModal: boolean | undefined;

  public closeModal() {
    this.closeModalEvent.emit();
  }

  public get showModal() {
    return !!this.#showModal;
  }

  public get username() {
    return this.#username || '';
  }

  @Input() set showModal(value: boolean) {
    this.#showModal = value;
  }

  @Input() set username(value: string) {
    this.#username = value;
  }
}
