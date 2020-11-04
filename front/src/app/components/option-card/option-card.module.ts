import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { OptionCardComponent } from './option-card.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [OptionCardComponent],
  exports: [OptionCardComponent]
})
export class OptionCardModule {}
