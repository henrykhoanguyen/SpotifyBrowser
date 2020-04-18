import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { ProfileData } from '../data/profile-data';
import { TrackData } from '../data/track-data';
import { ArtistData } from '../data/artist-data';
import { PlaylistData } from '../data/playlist-data';
import { AlbumData } from '../data/album-data';

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

  async getUserPlaylists() {
    return await this.sendRequest2Express('/getUserPlaylists').then(playlists => {
      if (playlists.success) {
        return playlists.data.items.map(playlist => {
          return new PlaylistData(playlist);
        });
      } else {
        return playlists.success;
      }
    });
  }

  async getUserSavedTracks() {
    return await this.sendRequest2Express('/getUserSavedTracks').then(tracks => {
      // console.log(tracks.data);
      if (tracks.success) {
        return tracks.data.items.map(track => {
          // console.log(track.track);
          return new TrackData(track.track);
        });
      } else {
        return tracks.success;
      }
    });
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  search(query: string) {
    // query = query.replace(' ', '%20');
    // console.log(query);
    // await this.sleep(3000);
    return this.sendRequest2Express(`/search/${encodeURIComponent(query)}`).then(results => {
      // console.log(results);
      if (results.success) {
        const datas = results.data;
        let myArtists;
        let myTracks;
        let myAlbums;
        let myPlaylists;

        if (datas.artists !== undefined) {
          myArtists = datas.artists.items.map(artist => {
            return new ArtistData(artist);
          });
        }

        if (datas.tracks !== undefined) {
          myTracks = datas.tracks.items.map(track => {
            return new TrackData(track);
          });
        }

        if (datas.albums !== undefined) {
          myAlbums = datas.albums.items.map(album => {
            // console.log(album);
            return new AlbumData(album);
          });
        }

        if (datas.playlists !== undefined) {
          // console.log(datas.playlists);
          myPlaylists = datas.playlists.items.map(playlist => {
            return new PlaylistData(playlist);
          });
        }
        return {
          myArtists,
          myTracks,
          myAlbums,
          myPlaylists,
        };
      }
    });
  }

}
