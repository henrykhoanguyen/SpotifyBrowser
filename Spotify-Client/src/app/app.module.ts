import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ArtistPageComponent } from './pages/artist-page/artist-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CarouseCardComponent } from './components/carouse-card/carouse-card.component';
import { TracksTableComponent } from './components/tracks-table/tracks-table.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { PlaylistCardsComponent } from './components/playlist-cards/playlist-cards.component';
import { FaveTracksTableComponent } from './components/fave-tracks-table/fave-tracks-table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    MainPageComponent,
    ArtistPageComponent,
    HomePageComponent,
    CarouseCardComponent,
    TracksTableComponent,
    AboutPageComponent,
    PlaylistCardsComponent,
    FaveTracksTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
