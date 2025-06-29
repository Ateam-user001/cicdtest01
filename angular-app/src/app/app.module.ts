import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { Nei_StartPageComponent } from './nei/start-page/start-page.component';
import { Ou_StartPageComponent } from './ou/start-page/start-page.component';
import { En_StartPageComponent } from './en/start-page/start-page.component';
import { Hou_StartPageComponent } from './hou/start-page/start-page.component';
import { Ko_StartPageComponent } from './ko/start-page/start-page.component';
import { Kyo_StartPageComponent } from './kyo/start-page/start-page.component';
import { Sato_StartPageComponent } from './sato/start-page/start-page.component';
import { To_StartPageComponent } from './to/start-page/start-page.component';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppComponent,
    Nei_StartPageComponent,Ou_StartPageComponent,En_StartPageComponent,Hou_StartPageComponent,
    Ko_StartPageComponent,Kyo_StartPageComponent,Sato_StartPageComponent,To_StartPageComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }