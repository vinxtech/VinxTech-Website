import { Component, Inject, PLATFORM_ID, HostListener  } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor (@Inject(PLATFORM_ID) private platformId: Object){}
  // User when scrolling down
  isScrolled = false;
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      this.isScrolled = scrollTop > 0;
    }
  }
}
