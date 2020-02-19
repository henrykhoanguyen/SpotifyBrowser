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

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.myInfo = this.spotifyService.aboutMe();
    console.log(this.myInfo);
  }

}
