import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ArtistsListComponent } from "./components/artists-list/artists-list.component";
import { ArtistDetailComponent } from "./components/artist-detail/artist-detail.component";
import { ArtistCardComponent } from "./components/artists-list/artist-card/artist-card.component";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ArtistsListComponent,
    ArtistDetailComponent,
    ArtistCardComponent
  ],
  imports: [CommonModule, HttpClientModule, RouterModule],
  exports: [ArtistsListComponent, ArtistDetailComponent, ArtistCardComponent]
})
export class ArtistModule {}
