import { Component, OnInit } from '@angular/core';
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

  myArtists;
  myTracks;

  constructor(private spotifyService: SpotifyService, private navbarService: NavBarService) { }

  ngOnInit() {
    this.navbarService.updateNavAfterAuth();
    this.navbarService.updateLoginStatus(true);

    this.spotifyService.aboutMe().then(data => {
      this.userImg = data.userImg;
      this.userName = data.name;
      this.userProfile = data.userProfile;

      console.log('User info loaded...');
    });

    this.spotifyService.topArtists().then(artists => {
      this.myArtists = artists;
      // console.log('Artists info loaded...', this.myArtists);
    });

    this.spotifyService.topTracks().then(tracks => {
      this.myTracks = tracks;
      // console.log('Tracks info loaded...', this.myTracks);
    });
  }

}
