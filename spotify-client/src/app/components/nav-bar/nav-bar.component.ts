import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MainPageComponent } from '../../pages/main-page/main-page.component';
import { AboutPageComponent } from '../../pages/about-page/about-page.component';
import { SinglePageComponent } from '../../pages/single-page/single-page.component';
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
  results;
  links: Array<{ linkName: string; path: string }>;

  constructor(private navbarService: NavBarService, private router: Router, private spotifyService: SpotifyService) {
    this.router.config.unshift(
      // Change pages dynamically
      { path: 'me', component: MainPageComponent },
      { path: 'about', component: AboutPageComponent },
      { path: 'single/:type/:id', component: SinglePageComponent }
    );
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

    if (event.target.value.length > 0) {
      this.query = event.target.value;

      this.spotifyService.search(this.query).then(results => {
        // console.log(results);

        this.results = results;
      });
    } else {
      this.query = '';
      this.results = '';
    }
  }
}
