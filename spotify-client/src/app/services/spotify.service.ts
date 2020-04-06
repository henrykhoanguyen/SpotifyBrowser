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

  async aboutMe(): Promise<ProfileData> {
    return await this.sendRequest2Express('/me').then(data => {
      if (data.success) {
        // console.log('User\'s profile loaded...');
        // console.log(data);
        return new ProfileData(data.data);
      } else {
        // console.log(data);
        return data.success;
      }
    });
  }

  async topArtists(): Promise<ArtistData> {
    return await this.sendRequest2Express('/topArtists').then(artists => {
      if (artists.success) {
        // console.log(artists.data.limit, artists.data.items);
        return artists.data.items.map(artist => {
          // console.log(artist);
          return new ArtistData(artist);
        });
      } else {
        return artists.success;
      }
    });
  }

  async topTracks(): Promise<TrackData> {
    return await this.sendRequest2Express('/topTracks').then(tracks => {
      // console.log(tracks.data.limit, tracks.data, tracks.data.items);
      if (tracks.success) {
        return tracks.data.items.map(track => {
          // console.log(track);
          return new TrackData(track);
        });
      } else {
        return tracks.success;
      }
    });
  }

  myArtists() {
    return this.sendRequest2Express('/followedArtists').then(artists => {
      console.log(artists.data);
    });
  }

  getUserPlaylists() {
    return this.sendRequest2Express('/getUserPlaylists').then(playlists => {
      console.log(playlists);
    });
  }

  getUserSavedTracks() {
    return this.sendRequest2Express('/getUserSavedTracks').then(tracks => {
      console.log(tracks.data);
    });
  }
}
