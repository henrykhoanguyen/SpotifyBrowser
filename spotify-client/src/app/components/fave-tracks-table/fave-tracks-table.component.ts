import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fave-tracks-table',
  templateUrl: './fave-tracks-table.component.html',
  styleUrls: ['./fave-tracks-table.component.css']
})
export class FaveTracksTableComponent implements OnInit {
  @Input() savedTracks;
  constructor() { }

  ngOnInit() {
  }


}
