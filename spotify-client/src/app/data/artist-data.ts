export class ArtistData {
  name: string;           // artist name
  type: string;           // object type: artist
  artistProfile: string;  // link to artist profile
  artistImg: string;      // artist profile image
  artistId: string;       // artist ID
  genres: [];             // artist's genres
  popularity: number;     // rank of an artist on Spotify
  followers: number;       // artists' follower

  constructor(objectModel: {}) {
    this.name = objectModel['name'];
    this.type = objectModel['type'];
    this.artistProfile = objectModel['external_urls'].spotify;
    this.artistId = objectModel['id'];
    if (objectModel['images'].length > 0) {
      this.artistImg = objectModel['images'][0].url;
    } else {
      this.artistImg = '../../assets/user.png';
    }
    this.genres = objectModel["genres"];
    this.popularity = objectModel["popularity"];
    this.followers = objectModel["followers"].total;
  }
}
