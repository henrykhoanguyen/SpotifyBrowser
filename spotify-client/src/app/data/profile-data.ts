export class ProfileData {
  name: string; // user's name
  email: string; // user's email
  userProfile: string; // link to user profile
  userImg: string; // user's profile image

  constructor(objectModel: {}) {
    this.name = objectModel['display_name'];
    this.email = objectModel['email'];
    this.userProfile = objectModel['external_urls']['spotify'];
    if (objectModel['images']) {
      this.userImg = objectModel['images'][0].url;
    } else {
      this.userImg = '../../assets/user.png';
    }
  }
}
