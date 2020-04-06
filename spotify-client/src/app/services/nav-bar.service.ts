import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {

  private links = new Array<{linkName: string, path: string}>();
  private isLoggedIn = new Subject<boolean>();

  constructor() {
    this.links.push({linkName: 'Login', path: 'http://localhost:5000/login'});
    this.isLoggedIn.next(false);
  }

  getLogInStatus() {
    return this.isLoggedIn;
  }

  getLinks() {
    return this.links;
  }

  updateLoginStatus(status: boolean) {
    this.isLoggedIn.next(status);
    // console.log(status);
    if (!status) {
      this.clearAllLinks();
      this.links.push({linkName: 'Login', path: 'http://localhost:5000/login'});
    }
  }

  // TODO: add links to different page when user login
  updateNavAfterAuth() {
    this.removeLink({ linkName: 'Login' });
    // add links here. Probably will need to pass in a variable to ensure
    // user is logged in successfully.
    this.links.push({ linkName: 'Dashboard', path: 'me' });
    this.links.push({ linkName: 'About', path: 'about' });
    // console.log(this.links);
  }

  removeLink({ linkName }) {
    this.links.forEach((link, index) => {
      if (link.linkName === linkName) {
        this.links.splice(linkName, 1);
      }
    });
  }

  clearAllLinks() {
    this.links.length = 0;
  }
}
