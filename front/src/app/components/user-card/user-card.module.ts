import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { UserCardComponent } from './user-card.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [UserCardComponent],
  exports: [UserCardComponent]
})
export class UserCardModule {}
