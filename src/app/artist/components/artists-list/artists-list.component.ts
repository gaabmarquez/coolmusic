import { Component, OnInit } from '@angular/core';
import { Artist } from '../../models/artist.model';
import { ArtistService } from '../../services/artist.service';

@Component({
  selector: 'cm-artists-list',
  templateUrl: './artists-list.component.html',
  styleUrls: ['./artists-list.component.scss']
})
export class ArtistsListComponent implements OnInit {
  isLoading = false;
  constructor(private artistService: ArtistService) {}

  public artists: Artist[] = [];

  ngOnInit() {
    this.isLoading = true;
    this.artistService.getTopArtists().subscribe(artists => {
      for (const artist of artists.artists.artist) {
        const artistAux: Artist = new Artist(
          artist.name,
          artist.url,
          '',
          artist.image[4]['#text']
        );
        this.artists.push(artistAux);
      }
      this.isLoading = false;
    });
  }
}
