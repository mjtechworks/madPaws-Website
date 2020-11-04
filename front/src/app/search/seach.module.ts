import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchPage } from './search.page';

import { SearchPageRoutingModule } from './search-routing.module';
import { SearchToolbarModule } from '../components/search-toolbar/search-toolbar.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SearchToolbarModule,
    SearchPageRoutingModule
  ],
  declarations: [SearchPage]
})
export class SearchPageModule {}
