import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonProps } from '../../logic/models/button.types';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input({ required: true }) props!: ButtonProps;
  @Output() buttonClick = new EventEmitter<MouseEvent>();

  public getClasses(): string {
    const classes = [
      `${this.props.className}`,
    ];

    if (this.props.isLoading) {
      classes.push(`loading`);
    }

    return classes.join(' ');
  }

  protected handleClick(event: MouseEvent): void {
    if (!this.props.isLoading && !this.props.isDisabled) {
      this.buttonClick.emit(event);
    }
  }
}
