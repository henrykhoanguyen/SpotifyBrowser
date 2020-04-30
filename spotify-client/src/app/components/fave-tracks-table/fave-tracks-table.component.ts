import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-fave-tracks-table',
  templateUrl: './fave-tracks-table.component.html',
  styleUrls: ['./fave-tracks-table.component.css'],

  // ViewEncapsulation.None helps provide css styling
  // to an injected and sanitized innerHTML.
  // Solution was found here: https://stackoverflow.com/questions/44210786/style-not-working-for-innerhtml-in-angular-2-typescript
  encapsulation: ViewEncapsulation.None
})
export class FaveTracksTableComponent implements OnInit {
  @Input() savedTracks;
  constructor() { }

  ngOnInit() {
  }


}
