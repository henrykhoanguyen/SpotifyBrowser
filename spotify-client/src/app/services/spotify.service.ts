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
  private expressBaseUrl = 'http://localhost:5000'; // for development
  // private expressBaseUrl = '';                   // for production

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

  async getUserPlaylists(request) {

    return await this.sendRequest2Express(`/getUserPlaylists/${encodeURIComponent(request)}`).then(playlists => {
      if (playlists.success) {
        // console.log(playlists);

        const getPlaylists = {
          next: playlists.data.next,
          // prev: playlists.data.previous,
          playlistsArr: playlists.data.items.map(playlist => {
            return new PlaylistData(playlist);
          })
        };
        return getPlaylists;
      } else {
        return playlists.success;
      }
    });
  }

  async getUserSavedTracks(request) {

    return await this.sendRequest2Express(`/getUserSavedTracks/${encodeURIComponent(request)}`).then(tracks => {
      // console.log(tracks.data);
      if (tracks.success) {
        const getTracks = {
          next: tracks.data.next,
          tracksArr: tracks.data.items.map(track => {
            // console.log(track.track);
            return new TrackData(track.track);
          })
        };
        return getTracks;
      } else {
        return tracks.success;
      }
    });
  }

  async getSingle(id: string, type: string) {
    return await this.sendRequest2Express(`/single/${encodeURIComponent(type)}/${encodeURIComponent(id)}`).then(result => {
      if (result.success) {
        switch (type) {
          case 'artists':
            console.log(result);
            return new ArtistData(result.data);
            // break;
          case 'tracks':
            console.log(result);
            return new TrackData(result.data);
            // break;
          case 'albums':
            console.log(result);
            return new AlbumData(result.data);
            // break;
          default:
            console.log('No result found');
            return null;
        }
      }
    });
  }

  async getArtistTopTracks(id: string) {
    return await this.sendRequest2Express(`/getArtistTopTracks/${encodeURIComponent(id)}`).then(results => {
      if (results.success) {
        return results.data.tracks.map(track => {
          // console.log(track);
          return new TrackData(track);
        });
      }
    });
  }

  search(query: string) {

    return this.sendRequest2Express(`/search/${encodeURIComponent(query)}`).then(results => {
      // console.log(results);
      if (results.success) {
        const datas = results.data;
        let searchArtists = null;
        let searchTracks = null;
        let searchAlbums = null;
        let searchPlaylists = null;

        if (datas.artists !== undefined && datas.artists.items.length !== 0) {
          searchArtists = datas.artists.items.map(artist => {
            return new ArtistData(artist);
          });
        }

        if (datas.tracks !== undefined && datas.tracks.items.length !== 0) {
          searchTracks = datas.tracks.items.map(track => {
            return new TrackData(track);
          });
        }

        if (datas.albums !== undefined && datas.albums.items.length !== 0) {
          searchAlbums = datas.albums.items.map(album => {
            // console.log(album);
            return new AlbumData(album);
          });
        }

        if (datas.playlists !== undefined && datas.playlists.items.length !== 0) {
          // console.log(datas.playlists);
          searchPlaylists = datas.playlists.items.map(playlist => {
            return new PlaylistData(playlist);
          });
        }
        return {
          searchArtists,
          searchTracks,
          searchAlbums,
          searchPlaylists,
        };
      }
    });
  }

}
