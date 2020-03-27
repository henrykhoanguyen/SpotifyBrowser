export class TrackData {
  name: string;
  trackNumber: number;
  type: string;
  artists: [];
  trackURL: string;
  album: {};

  constructor(objectModel: {}) {
    this.name = objectModel['name'];
    this.trackNumber = objectModel['id'];
    this.type = objectModel['type'];
    this.artists = objectModel['artists'];
    this.trackURL = objectModel['external_urls'].spotify;
    this.album = objectModel['album'];
  }
}
