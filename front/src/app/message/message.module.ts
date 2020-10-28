import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessagePage } from './message.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { MessagePageRoutingModule } from './message-routing.module'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: MessagePage }]),
    MessagePageRoutingModule,
  ],
  declarations: [MessagePage]
})
export class MessagePageModule {}
