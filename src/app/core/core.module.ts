import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { LandingComponent } from "./components/landing/landing.component";
import { FooterComponent } from "./components/footer/footer.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [NavigationComponent, LandingComponent, FooterComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavigationComponent, FooterComponent]
})
export class CoreModule {}
