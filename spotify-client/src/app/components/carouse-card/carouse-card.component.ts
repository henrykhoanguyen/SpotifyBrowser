import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carouse-card',
  templateUrl: './carouse-card.component.html',
  styleUrls: ['./carouse-card.component.css']
})
export class CarouseCardComponent implements OnInit {
  @Input() artists;
  @Input() carouselId: string;

  constructor() { }

  ngOnInit() {
    // console.log(this.artists);
  }

}
