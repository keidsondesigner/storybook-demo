import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.scss'],
})
export default class UiButtonComponent {

  @Input()
  isPrimary = false;

  @Input()
  backgroundColor?: string;

  @Input()
  buttonSize: 'small' | 'medium' | 'large' = 'medium';

  @Input()
  label = 'Texto';

  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.isPrimary ? 'storybook-button--primary' : 'storybook-button--secondary';

    return ['storybook-button', `${this.buttonSize}`, mode];
  }
}
