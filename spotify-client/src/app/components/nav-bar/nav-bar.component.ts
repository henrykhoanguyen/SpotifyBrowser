import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MainPageComponent } from '../../pages/main-page/main-page.component';
import { NavBarService } from '../../services/nav-bar.service';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  isLoggedIn: boolean = false;
  query: string = '';
  links: Array<{ linkName: string; path: string }>;

  constructor(private navbarService: NavBarService, private router: Router, private spotifyService: SpotifyService) {
    this.router.config.unshift({ path: 'me', component: MainPageComponent });
  }

  ngOnInit() {
    this.links = this.navbarService.getLinks();
    this.navbarService
      .getLogInStatus()
      .subscribe((status) => (this.isLoggedIn = status));
  }

  logout() {
    this.navbarService.updateLoginStatus(false);
    this.router.navigate(['home']);
  }

  search(event: any): void {
    // console.log(event.target.value.length);
    if (event.target.value.length > 0) {
      this.query = event.target.value;
      // console.log(this.query);
      this.spotifyService.search(this.query);
    } else {
      this.query = '';
    }
  }
}
