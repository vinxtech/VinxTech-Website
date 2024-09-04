import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor(public translationService: TranslateService , private router: Router) { }

  public change(language: string) {
    this.translationService.use(language);
    localStorage.setItem('lang', language);
    // location.reload();
  }

  public translate(key: string): string {
    return this.translationService.instant(key);
  }

  public changeAppDirection(local: string): void {
    document.body.dir = local  === 'ar'? 'rtl' : 'ltr';

    return local === 'en'
      ? document.getElementsByTagName('html')[0].setAttribute('dir', 'ltr')
      : document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');

  }

  public changeHtmlLang(local: string): void {
    document.body.dir = local  === 'ar'? 'rtl' : 'ltr';

    return local === 'en'
      ? document.getElementsByTagName('html')[0].setAttribute('lang', 'en')
      : document.getElementsByTagName('html')[0].setAttribute('lang', 'ar');
  }

  setLanguage(lang: string) {    
    this.translationService.use(lang);
    // Update URL and reload the page
    const url = this.router.url;
    const newUrl = url.replace(/\/(en|ar)/, `/${lang}`);
    // this.router.navigateByUrl(newUrl).then(() => {
    //   window.location.reload(); // Reload the page to ensure all content is loaded in the new language
    // });
  }

  
}
