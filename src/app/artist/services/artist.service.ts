import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  private header = { headers: { 'Content-Type': 'application/json' } };

  constructor(private http: HttpClient) {}

  getTopArtists() {
    return this.http.get<any>(
      environment.baseUrl +
        'method=chart.gettopartists&api_key=' +
        environment.apiKey +
        '&limit=12' +
        '&format=json',
      this.header
    );
  }

  getArtistInfoByName(name: string) {
    return this.http.get<any>(
      environment.baseUrl +
        'method=artist.getinfo&artist=' +
        name +
        '&api_key=' +
        environment.apiKey +
        '&format=json',
      this.header
    );
  }
  getArtistTopTracksByName(name: string) {
    name = name.trim();
    name = name.replace(' ', '+');
    return this.http.get<any>(
      environment.baseUrl +
        'method=artist.gettoptracks&artist=' +
        name +
        '&api_key=' +
        environment.apiKey +
        '&limit=10' +
        '&format=json',
      this.header
    );
  }
  getArtistTopAlbumsByName(name: string) {
    name = name.trim();
    name = name.replace(' ', '+');
    return this.http.get<any>(
      environment.baseUrl +
        'method=artist.gettopalbums&artist=' +
        name +
        '&api_key=' +
        environment.apiKey +
        '&limit=10' +
        '&format=json',
      this.header
    );
  }
}
