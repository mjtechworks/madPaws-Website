import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SearchToolbarComponent } from './search-toolbar.component';
import { OptionCardModule } from '../option-card/option-card.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [ 
    CommonModule,
    FormsModule,
    IonicModule,
    OptionCardModule,
    RouterModule
  ],
  declarations: [SearchToolbarComponent],
  exports: [SearchToolbarComponent]
})
export class SearchToolbarModule {}
