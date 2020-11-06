import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-option-card',
  templateUrl: './option-card.component.html',
  styleUrls: ['./option-card.component.scss'],
})
export class OptionCardComponent {
  @Input() name: string;
  @Input() icon: string;
  public isChecked = false;

  checkValue(): void {
    this.isChecked = !this.isChecked;
  }
}
