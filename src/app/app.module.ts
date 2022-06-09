import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MusicMenuComponent } from './music/music-menu/music-menu.component';
import { MusicListComponent } from './music/music-list/music-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicMenuComponent,
    MusicListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
