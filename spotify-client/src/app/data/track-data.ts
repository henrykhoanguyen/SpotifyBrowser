export class TrackData {
  name: string;
  trackId: number;
  type: string;
  artists: [];
  trackURL: string;
  album: {};
  duration: string;

  constructor(objectModel: {}) {
    this.name = objectModel['name'];
    this.trackId = objectModel['id'];
    this.type = objectModel['type'];
    this.artists = objectModel['artists'];
    this.trackURL = objectModel['external_urls'].spotify;
    this.album = objectModel['album'];
    this.duration = this.getDuration(objectModel['duration_ms']);
  }

  getDuration(time: number): string {
    const minutes = Math.floor(time / 60000);
    time -= minutes * 60000;
    const seconds = ('0' +  Math.floor(time / 1000)).slice(-2);
    // console.log(minutes, seconds);
    return String(minutes) + ':' + String(seconds);
  }
}
