import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { ProfileData } from '../data/profile-data';
import { TrackData } from '../data/track-data';
import { ArtistData } from '../data/artist-data';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private expressBaseUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {
    console.log('Spotify service initialized...');
  }

  private sendRequest2Express(endpoint: string): Promise<any> {
    // console.log(this.expressBaseUrl + endpoint);
    this.http.get(this.expressBaseUrl + endpoint).subscribe(res => {});

    return Promise.resolve(
      this.http.get(this.expressBaseUrl + endpoint).toPromise()
    );
  }

  aboutMe(): Promise<ProfileData> {
    return this.sendRequest2Express('/me').then(data => {
      if (data.success) {
        // console.log('User\'s profile loaded...');
        return new ProfileData(data.data);
      } else {
        return data.success;
      }
    });
  }

  topArtists() {
    return this.sendRequest2Express('/topArtists').then(artists => {
      if (artists.success) {
        // console.log(artists.data.limit, artists.data.items);
        let artistArr = [];
        for (let i = 0; i < artists.data.limit; i++) {
          // console.log(artists.data.items[i]);
          artistArr.push(new ArtistData(artists.data.items[i]));
        }
        // console.log(artistArr);
        return artistArr;
      } else {
        return artists.success;
      }
    });
  }

  topTracks() {
    return this.sendRequest2Express('/topTracks').then(tracks => {
      console.log(tracks.data.limit, tracks.data, tracks.data.items);
      if (tracks.success) {
        let trackArr = [];
        for (let i = 0; i < tracks.data.limit; i++) {
          // console.log(artists.data.items[i]);
          trackArr.push(new ArtistData(tracks.data.items[i]));
        }
        // console.log(artistArr);
        return trackArr;
      } else {
        return tracks.success;
      }
    });
  }

  myArtists() {
    return this.sendRequest2Express('/followedArtists').then(artists => {
      // console.log(artists);
    });
  }

}
