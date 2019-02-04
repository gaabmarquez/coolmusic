import { Component, OnInit } from '@angular/core';
import { Artist } from '../../models/artist.model';
import { ArtistService } from '../../services/artist.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cm-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.scss']
})
export class ArtistDetailComponent implements OnInit {
  public selectedArtist: Artist;
  isLoading = false;

  constructor(
    private artistService: ArtistService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.route.params.subscribe(params => {
      if (params.hasOwnProperty('name')) {
        this.loadData(params['name']);
      }
    });
  }

  loadData(name: string) {
    this.artistService.getArtistInfoByName(name).subscribe(artist => {
      this.selectedArtist = new Artist(
        artist.artist.name,
        artist.artist.url,
        artist.artist.bio.summary,
        artist.artist.image[3]['#text']
      );
      this.artistService.getArtistTopTracksByName(name).subscribe(toptracks => {
        for (const track of toptracks.toptracks.track) {
          this.selectedArtist.topTracks.push(track.name);
        }
      });
      this.artistService.getArtistTopAlbumsByName(name).subscribe(topalbums => {
        for (const album of topalbums.topalbums.album) {
          this.selectedArtist.topAlbums.push(album.name);
        }
      });
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    });
  }
}
