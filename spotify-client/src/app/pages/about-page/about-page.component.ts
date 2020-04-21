import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../../services/nav-bar.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  constructor(private navbarService: NavBarService) { }

  ngOnInit() {
    this.navbarService.updateNavAfterAuth();
    this.navbarService.updateLoginStatus(true);
  }

}
