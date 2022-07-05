import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of heroes';
  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'ru']);
    translate.setDefaultLang('en');
    translate.use('en');
  }

  useLanguage(language: string): void {
    this.translate.use(language);
}
}
