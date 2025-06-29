import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Nei_StartPageComponent } from './nei/start-page/start-page.component';
import { Nei_PollListComponent } from './nei/poll-list/poll-list.component';
import { Ou_StartPageComponent } from './ou/start-page/start-page.component';
import { En_StartPageComponent } from './en/start-page/start-page.component';
import { Hou_StartPageComponent } from './hou/start-page/start-page.component';
import { Ko_StartPageComponent } from './ko/start-page/start-page.component';
import { Kyo_StartPageComponent } from './kyo/start-page/start-page.component';
import { Sato_StartPageComponent } from './sato/start-page/start-page.component';
import { To_StartPageComponent } from './to/start-page/start-page.component';



// 他のスタートページコンポーネントをインポート


export const routes: Routes = [
  { path: 'app-root', component: AppComponent },
  { path: 'nei-poll-list', component: Nei_PollListComponent },
  { path: 'nei-start-page', component: Nei_StartPageComponent },
  { path: 'ou-start-page', component: Ou_StartPageComponent },
  { path: 'en-start-page', component: En_StartPageComponent },
  { path: 'hou-start-page', component: Hou_StartPageComponent },
  { path: 'ko-start-page', component: Ko_StartPageComponent },
  { path: 'kyo-start-page', component: Kyo_StartPageComponent },
  { path: 'sato-start-page', component: Sato_StartPageComponent },
  { path: 'to-start-page', component: To_StartPageComponent }
  // 他のスタートページコンポーネントのルートを追加

 // { path: '', redirectTo: 'app-root', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
