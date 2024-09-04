import { Component, Inject, PLATFORM_ID, HostListener, Renderer2, OnInit } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  selectedLang: string = localStorage.getItem('lang') || 'en';

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object, public languageService: LanguageService,
    public translationService: TranslateService, private router: Router,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document) { }


  ngOnInit(): void {
    console.log(this.selectedLang);
    
  }
  // User when scrolling down
  isScrolled = false;
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      this.isScrolled = scrollTop > 0;
    }
  }

  public initAppTranslation() {
    this.languageService.changeAppDirection(this.selectedLang);
    this.languageService.changeHtmlLang(this.selectedLang);
    this.translationService.use(this.selectedLang);
  }

  onLangChange(lang: string) {
    // Update the selected language
    this.selectedLang = lang;

    // Use the selected language in ngx-translate
    this.translationService.use(lang);

    // Store the selected language in localStorage
    localStorage.setItem('language', lang);
    console.log(`Stored language in localStorage: ${localStorage.getItem('language')}`);

    // Navigate to the route with the selected language
    this.router.navigate([`/${lang}/home`]);

    // Update the direction of the document based on the selected language
    this.document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // Update the HTML language attribute
    document.getElementsByTagName('html')[0].setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.getElementsByTagName('html')[0].setAttribute('lang', lang);
    this.router.navigate([`/${lang}/home`]).then(() => {
      // Reload the page to apply changes
      // window.location.reload();
      console.log(`Navigated to: /${lang}/home`);

    }); 
     }
}
