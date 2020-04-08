import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-playlist-cards',
  templateUrl: './playlist-cards.component.html',
  styleUrls: ['./playlist-cards.component.css']
})
export class PlaylistCardsComponent implements OnInit {
  @Input() playlists;
  constructor() { }

  ngOnInit() {
  }

}
