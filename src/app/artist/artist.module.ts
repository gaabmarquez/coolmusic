import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ArtistsListComponent } from "./components/artists-list/artists-list.component";
import { ArtistDetailComponent } from "./components/artist-detail/artist-detail.component";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ArtistsListComponent,
    ArtistDetailComponent,
  ],
  imports: [CommonModule, HttpClientModule, RouterModule],
  exports: [ArtistsListComponent, ArtistDetailComponent]
})
export class ArtistModule {}
