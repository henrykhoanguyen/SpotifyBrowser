import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MainPageComponent } from '../../pages/main-page/main-page.component';
import { NavBarService } from '../../services/nav-bar.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  isLoggedIn = false;
  links: Array<{ linkName: string; path: string }>;

  constructor(private navbarService: NavBarService, private router: Router) {
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

}
