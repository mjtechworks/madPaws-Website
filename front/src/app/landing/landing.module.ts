import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LandingPage } from './landing.page';

import { LandingPageRoutingModule } from './landing-routing.module';
import { SearchToolbarModule } from '../components/search-toolbar/search-toolbar.module';
import { UserCardModule } from '../components/user-card/user-card.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SearchToolbarModule,
    LandingPageRoutingModule,
    SearchToolbarModule,
    UserCardModule
  ],
  declarations: [LandingPage]
})
export class LandingPageModule {}
