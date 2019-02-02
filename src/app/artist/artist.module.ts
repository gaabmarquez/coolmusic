import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistsListComponent } from './components/artists-list/artists-list.component';
import { ArtistDetailComponent } from './components/artist-detail/artist-detail.component';
import { ArtistCardComponent } from './components/artists-list/artist-card/artist-card.component';

@NgModule({
  declarations: [ArtistsListComponent, ArtistDetailComponent, ArtistCardComponent],
  imports: [
    CommonModule
  ]
})
export class ArtistModule { }
