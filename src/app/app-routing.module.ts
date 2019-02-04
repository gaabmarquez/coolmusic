import { ArtistDetailComponent } from './artist/components/artist-detail/artist-detail.component';
import { ArtistsListComponent } from './artist/components/artists-list/artists-list.component';
import { LandingComponent } from './core/components/landing/landing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'artists', component: ArtistsListComponent },
  { path: 'artist/:name', component: ArtistDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
