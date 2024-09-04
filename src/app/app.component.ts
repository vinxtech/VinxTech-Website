import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './services/language.service';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  selectedLang: string = localStorage.getItem('lang') || 'en';

  constructor(
    public languageService: LanguageService,
    public translationService: TranslateService,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    private route: ActivatedRoute,
    private router: Router
   ) { }

   ngOnInit() {
    const storedLang = localStorage.getItem('language') || 'en';
    console.log(`Initializing with stored language: ${storedLang}`);
    this.translationService.use(storedLang);
  
    this.route.params.subscribe(params => {
      const lang = params['lang'] || storedLang;
      console.log(`Route language: ${lang}`);
      if (!['en', 'ar'].includes(lang)) {
        this.router.navigate(['/en/home']);
      } else {
        this.translationService.use(lang);
        localStorage.setItem('language', lang);
        this.document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.getElementsByTagName('html')[0].setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        document.getElementsByTagName('html')[0].setAttribute('lang', lang);
      }
    });
  }

}
