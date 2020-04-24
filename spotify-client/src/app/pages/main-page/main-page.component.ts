import { Component, OnInit, HostListener } from '@angular/core';
// Services
import { SpotifyService } from '../../services/spotify.service';
import { NavBarService } from '../../services/nav-bar.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  userImg = '../../../assets/user.png';
  userName = 'Loading...';
  userProfile = '#';

  myArtists; // Top 10 artists
  myTracks; // Top 10 tracks

  myPlaylists; // Saved playlists
  private reqPlaylists = 'none'; // Spotify endpoint to request more playlist
  mySavedTracks; // Saved Tracks

  constructor(private spotifyService: SpotifyService, private navbarService: NavBarService) { }

  ngOnInit() {
    this.navbarService.updateNavAfterAuth();
    this.navbarService.updateLoginStatus(true);

    // this.spotifyService.aboutMe().then(data => {
    //   this.userImg = data.userImg;
    //   this.userName = data.name;
    //   this.userProfile = data.userProfile;

    //   console.log('User info loaded...');
    // });
    //
    // this.spotifyService.topArtists().then(artists => {
    //   this.myArtists = artists;
    //   // console.log('Artists info loaded...', this.myArtists);
    // });

    // this.spotifyService.topTracks().then(tracks => {
    //   this.myTracks = tracks;
    //   // console.log('Tracks info loaded...', this.myTracks);
    // });

    this.spotifyService.getUserPlaylists(this.reqPlaylists).then(playlists => {
      // this.myPlaylists = playlists;
      // this.getDisplayPlaylists(playlists);
      console.log(playlists);
      this.reqPlaylists = playlists.next;
      this.myPlaylists = playlists.playlistsArr;
      // console.log('Saved playlists loaded...', this.myPlaylists);
    });

    // // this.spotifyService.myArtists().then(artists => {
    // //   console.log('My followed artists loaded...');
    // // });

    // this.spotifyService.getUserSavedTracks().then(tracks => {
    //   this.mySavedTracks = tracks;
    //   // console.log('My saved tracks loaded...', this.mySavedTracks);
    // });
  }

  @HostListener('scroll', ['$event'])
  onScroll(event): void {
    if (event.target.offsetWidth + event.target.scrollLeft >= event.target.scrollWidth) {
      console.log('End');
      this.getDisplayPlaylists();
    }
  }

  getDisplayPlaylists() {
    this.spotifyService.getUserPlaylists(this.reqPlaylists).then(playlists => {
      // this.myPlaylists = playlists;
      // this.getDisplayPlaylists(playlists);
      console.log(playlists);

      // TODO: FIX!! next is broken for the last new playlists!
      if (this.reqPlaylists !== null) {
        this.reqPlaylists = playlists.next;
        this.myPlaylists = this.myPlaylists.concat(playlists.playlistsArr);
      } else {
        console.log('No more items!');
      }
      // console.log('Saved playlists loaded...', this.myPlaylists);
    });
  }
}
