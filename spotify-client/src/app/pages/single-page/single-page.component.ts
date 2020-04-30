import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import { DatePipe } from '@angular/common';
import { TrackData } from '../../data/track-data';

@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.css'],

  // ViewEncapsulation.None helps provide css styling
  // to an injected and sanitized innerHTML.
  // Solution was found here: https://stackoverflow.com/questions/44210786/style-not-working-for-innerhtml-in-angular-2-typescript
  encapsulation: ViewEncapsulation.None
})
export class SinglePageComponent implements OnInit {

  private type = this.activatedRouter.snapshot.paramMap.get('type');
  private id = this.activatedRouter.snapshot.paramMap.get('id');
  data;

  // Public variable to be bind
  releaseDate;
  artists: string;      // artists of a track
  tracks = [];       // tracks detail in an album

  private pipe = new DatePipe('en-US');

  constructor(private activatedRouter: ActivatedRoute, private spotifyService: SpotifyService) { }

  ngOnInit() {
    // console.log(this.type, this.id);

    this.spotifyService.getSingle(this.id, this.type).then(result => {
      console.log(result);
      if (result) {
        this.data = result;

        if (result.type === 'track') {
          // Get formatted date
          this.releaseDate = this.pipe.transform(result['album'].release_date, 'fullDate');
          // Get artist(s) that worked on a track
          this.artists = this.getArtists(result['artists']);
        }

        if (result.type === 'album') {
          // Get formatted date
          this.releaseDate = this.pipe.transform(result['release_date'], 'fullDate');
          // Get artist(s) that works on an album
          this.artists = this.getArtists(result['artists']);

          // TODO: make tracks detail for table
          result['tracks'].forEach(track => {
            // console.log(track);
            this.tracks.push(new TrackData(track));
          });
          this.tracks.forEach(track => {
            track.artists = this.getArtists(track.artists);
          })
          console.log(this.tracks);
        }
        // console.log(this.artists, this.releaseDate);
      }

    });
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

}
