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
  userName = 'Loading . . .';
  userProfile = '#';

  myArtists; // Top 10 artists
  myTracks; // Top 10 tracks

  myPlaylists; // Saved playlists
  mySavedTracks = []; // Saved Tracks

  private reqPlaylists = 'none'; // Spotify endpoint to request more saved playlist
  private reqTracks = 'none'; // Spotify endpoint to request more saved tracks


  constructor(private spotifyService: SpotifyService, private navbarService: NavBarService) { }

  ngOnInit() {
    this.navbarService.updateNavAfterAuth();
    this.navbarService.updateLoginStatus(true);

    // /**** Get User's Info and URL to their profile ****/
    // this.spotifyService.aboutMe().then(data => {
    //   this.userImg = data.userImg;
    //   this.userName = data.name;
    //   this.userProfile = data.userProfile;

    //   console.log('User info loaded...');
    // });

    // /**** Get User's Most Favorite Artists ****/
    // this.spotifyService.topArtists().then(artists => {
    //   this.myArtists = artists;
    //   // console.log('Artists info loaded...', this.myArtists);
    // });

    // /**** Get User's Most Favorite Tracks ****/
    // this.spotifyService.topTracks().then(tracks => {
    //   this.myTracks = tracks;
    //   // console.log('Tracks info loaded...', this.myTracks);
    // });

    // /**** Get All User's Saved Playlist ****/
    // this.spotifyService.getUserPlaylists(this.reqPlaylists).then(playlists => {

    //   this.reqPlaylists = playlists.next;
    //   this.myPlaylists = playlists.playlistsArr;
    //   // console.log('Saved playlists loaded...', this.myPlaylists);
    // });

    // /**** Get 100 of User's Most Recent Saved Tracks ****/
    // this.spotifyService.getUserSavedTracks(this.reqTracks).then(tracks => {
    //   this.reqTracks = tracks.next;
    //   // this.mySavedTracks = tracks.tracksArr;
    //   // tracks.tracksArr.forEach(track => {
    //   //   track.artists = this.getArtists(track.artists);
    //   // });
    //   this.mySavedTracks = tracks.tracksArr;

    //   console.log('My saved tracks loaded...', this.mySavedTracks);
    // });

    // // this.spotifyService.myArtists().then(artists => {
    // //   console.log('My followed artists loaded...');
    // // });
  }

  private getArtists(artists): string {

    var tmpArtists = [];

    // Get artist(s) that worked on a album
    artists.forEach(element => {
      tmpArtists.push(`<a href="${element.external_urls.spotify}" target="blank">${element.name}</a>`);
    });
    if (tmpArtists.length !== 2){
      return tmpArtists.join(', ');
    } else {
      return tmpArtists.join(' & ');
    }
  }

  @HostListener('scroll', ['$event'])
  onPlaylistScroll(event): void {
    if (event.target.offsetWidth + event.target.scrollLeft >= event.target.scrollWidth) {
      console.log('End of playlists...');
      this.getDisplayPlaylists();
    }
  }

  getDisplayPlaylists() {
    if (this.reqPlaylists !== null) {
      this.spotifyService.getUserPlaylists(this.reqPlaylists).then(playlists => {

        // console.log(playlists);

        this.reqPlaylists = playlists.next;
        this.myPlaylists = this.myPlaylists.concat(playlists.playlistsArr);
        // console.log('Saved playlists loaded...', this.myPlaylists);
      });
    } else {
      console.log('No more playlists to load...');
    }
  }

  @HostListener('scroll', ['$event'])
  onTracksListScroll(event): void {

    if (event.target.clientHeight + event.target.scrollTop >= event.target.scrollHeight) {
      console.log('End of tracks list...');
      this.getMoreTracks();
    }
  }

  getMoreTracks() {
    if (this.reqTracks !== null && this.mySavedTracks.length !== 100) {
      this.spotifyService.getUserSavedTracks(this.reqTracks).then(tracks => {
        this.reqTracks = tracks.next;
        this.mySavedTracks = this.mySavedTracks.concat(tracks.tracksArr);
      });
    } else {
      console.log('No more items to load...')
    }
  }
}
