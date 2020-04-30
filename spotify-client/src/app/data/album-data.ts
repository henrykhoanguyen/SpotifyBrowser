export class AlbumData {
  name: string;         // Album's name
  type: string;         // General type
  artists: [];          // Album's artists
  albumId: string;      // Album's ID
  albumURL: string;     // Link to album
  albumImg: string;     // Album's cover image
  release_date: string; // Album's release date
  num_tracks: number;   // Number of track in album
  tracks: any[];

  constructor(objectModel: {}) {
    this.name = objectModel['name'];
    this.type = objectModel['type'];
    this.artists = objectModel['artists'];
    this.albumId = objectModel['id'];
    this.albumURL = objectModel['external_urls'].spotify;
    if (objectModel['images'].length > 0) {
      this.albumImg = objectModel['images'][0].url;
    } else {
      this.albumImg = '../../assets/playlist.png';
    }
    this.release_date = objectModel['release_date'];
    this.num_tracks = objectModel['total_tracks'];

    if (objectModel['tracks']) {
      this.tracks = [...objectModel['tracks'].items];
    }
  }
}
