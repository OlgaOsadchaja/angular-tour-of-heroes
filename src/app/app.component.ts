import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `<h1>{{ 'LABELS.APP.TITLE' | translate }}</h1>
  <nav>
    <a routerLink="/dashboard">{{ 'COMMON.BUTTONS.DASHBOARD' | translate }}</a>
    <a routerLink="/heroes">{{ 'COMMON.BUTTONS.HEROES' | translate }}</a>
    <select class="translate" #langSelect (change)="translate.use(langSelect.value)">
      <option *ngFor="let lang of translate.getLangs()" [value]="lang" [selected]="lang === translate.currentLang">{{ lang }}</option>
    </select>
  </nav>
<router-outlet></router-outlet>
<app-messages></app-messages>`,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'ru']);
    translate.setDefaultLang('en');
    translate.use('en');

    const browserLang = translate.getBrowserLang() as string;
    translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }

  
}
