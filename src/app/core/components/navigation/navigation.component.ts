import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer,
  Renderer2
} from '@angular/core';

@Component({
  selector: 'cm-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @ViewChild('navbarResponsive')
  navbarResponsive: ElementRef;

  constructor(private render: Renderer2) {}

  ngOnInit() {}

  collapse() {
    console.log('collapse');
    this.render.removeClass(this.navbarResponsive.nativeElement, 'show');
  }
}
