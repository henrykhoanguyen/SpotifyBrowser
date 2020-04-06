import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tracks-table',
  templateUrl: './tracks-table.component.html',
  styleUrls: ['./tracks-table.component.css']
})
export class TracksTableComponent implements OnInit {

  @Input() tracks;

  constructor() { }

  ngOnInit() {
  }

}
