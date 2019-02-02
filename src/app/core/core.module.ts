import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LandingComponent } from './components/landing/landing.component';

@NgModule({
  declarations: [NavigationComponent, LandingComponent],
  imports: [
    CommonModule
  ],
  exports: [NavigationComponent]
})
export class CoreModule { }
