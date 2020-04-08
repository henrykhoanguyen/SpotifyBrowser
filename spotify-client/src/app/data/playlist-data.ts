export class PlaylistData {
  name: string;         // Name of playlist
  description: string;  // Description of playlist
  owner: {};            // owner of playlist
  playlistId: number;   // Playlist Id
  playlistImg: string;  // cover image of playlist
  playlistURL: string;  // link to playlist
  type: string;         // type of object
  tracks: {};           // tracks info of playlist
  // TODO: implement 'next' request for backend to retrieve next 20 playlists.
  next: string;         // request the next 20 playlists

  constructor(objectModel: {}) {
    // const data = objectModel['items'];

    this.name = objectModel["name"];
    this.playlistId = objectModel['id'];
    this.type = objectModel['type'];
    this.owner = objectModel['owner'];
    this.playlistURL = objectModel['external_urls'].spotify;
    if (objectModel['images']) {
      this.playlistImg = objectModel['images'][0].url;
    } else {
      this.playlistImg = '../../assets/playlist.png';
    }
    this.tracks = objectModel['tracks'];

    // TODO: implement link in description
    this.description = objectModel['description'];

    // this.next = objectModel['next'];
  }
}
