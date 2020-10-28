import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'landing',
        loadChildren: () => import('../landing/landing.module').then(m => m.LandingPageModule)
      },
      {
        path: 'search',
        loadChildren: () => import('../search/seach.module').then(m => m.SearchPageModule)
      },
      {
        path: 'message',
        loadChildren: () => import('../message/message.module').then(m => m.MessagePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/landing',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/landing',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
