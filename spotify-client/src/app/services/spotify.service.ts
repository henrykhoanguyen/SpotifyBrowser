import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private expressBaseUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {
    console.log('Spotify service initialized...');
  }

  private sendRequest2Express(endpoint: string): Promise<any> {
    // console.log(this.expressBaseUrl + endpoint);
    this.http.get(this.expressBaseUrl + endpoint).subscribe(res => {
      console.log(res);
    });

    return Promise.resolve(
      this.http.get(this.expressBaseUrl + endpoint).toPromise()
    );
  }

  aboutMe() {
    this.sendRequest2Express('/me').then(data => {
      console.log(data);
    });
  }
}
