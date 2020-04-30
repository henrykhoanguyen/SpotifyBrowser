import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.css']
})
export class SinglePageComponent implements OnInit {

  private type = this.activatedRouter.snapshot.paramMap.get('type');
  private id = this.activatedRouter.snapshot.paramMap.get('id');
  data;

  // Public variable to be bind
  releaseDate;
  artists: string;      // artists of a track
  tracks: string;       // tracks detail in an album

  private pipe = new DatePipe('en-US');

  constructor(private activatedRouter: ActivatedRoute, private spotifyService: SpotifyService) { }

  ngOnInit() {
    // console.log(this.type, this.id);

    this.spotifyService.getSingle(this.id, this.type).then(result => {
      console.log(result);
      if (result) {
        this.data = result;

        if (result.type === 'track') {
          this.releaseDate = this.pipe.transform(result['album'].release_date, 'fullDate');

          let tmpArtists = [];
          // Get artist(s) that worked on a album
          result['artists'].forEach(element => {
            tmpArtists.push(`<a href="${element.external_urls.spotify}">${element.name}</a>`);
          });
          if (tmpArtists.length !== 2){
            this.artists = tmpArtists.join(', ');
          } else {
            this.artists = tmpArtists.join(' and ');
          }
        }

        if (result.type === 'album') {
          // Get formatted date
          this.releaseDate = this.pipe.transform(result['release_date'], 'fullDate');

          // TODO: combine this and tracks' artists into an artists extract function
          let tmpArtists = [];
          // Get artist(s) that worked on a album
          result['artists'].forEach(element => {
            tmpArtists.push(`<a href="${element.external_urls.spotify}">${element.name}</a>`);
          });
          if (tmpArtists.length !== 2){
            this.artists = tmpArtists.join(', ');
          } else {
            this.artists = tmpArtists.join(' and ');
          }

          // TODO: make tracks detail for table
        }
        // console.log(this.artists, this.releaseDate);
      }

    });
  }

}
