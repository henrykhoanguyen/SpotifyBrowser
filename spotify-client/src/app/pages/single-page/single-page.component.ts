import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.css']
})
export class SinglePageComponent implements OnInit {

  private type = this.activatedRouter.snapshot.paramMap.get('type');
  private id = this.activatedRouter.snapshot.paramMap.get('id');
  data;

  constructor(private activatedRouter: ActivatedRoute, private spotifyService: SpotifyService) { }

  ngOnInit() {
    console.log(this.type, this.id);

    this.spotifyService.getSingle(this.id, this.type).then(result => {
      console.log(result);
      if (result) {
        this.data = result;
      }
    });
  }

}
