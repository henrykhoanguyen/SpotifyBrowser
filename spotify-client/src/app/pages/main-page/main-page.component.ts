import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { asyncHandler } from '../../../../../middleware/async';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  private myInfo;
  private topArtists;
  private topTracks;
  private myArtists;

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.myInfo = this.spotifyService.aboutMe();
    this.topArtists = this.spotifyService.topArtists();
    this.topTracks = this.spotifyService.topTracks();
    this.myArtists = this.spotifyService.myArtists();
    console.log('User info loaded', this.myInfo);
    console.log('Top Artists', this.topArtists);
    console.log('Top Tracks', this.topTracks);
    console.log('My Artists', this.myArtists);
  }

}
