import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.scss'],
})
export default class UiButtonComponent {

  @Input()
  isPrimary = false;

  @Input()
  backgroundColor?: string;

  @Input()
  buttonSize: 'small' | 'medium' | 'large' = 'medium';

  @Input()
  buttonStyle: 'primary' | 'secondary' = 'primary';

  @Input()
  label = 'Texto';

  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.isPrimary ? this.buttonStyle = 'primary' : this.buttonStyle = 'secondary';

    return [ `${this.buttonSize}`, mode];
  }
}
