import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
    
  constructor(private translate:TranslateService){
    translate.addLangs(["en","es"]);  
    translate.setDefaultLang('es');
    let browserlang = translate.getBrowserLang();
    translate.use(browserlang.match(/en|es/) ? browserlang : "es");
  }

  public changeLanguage(language?:string){
    this.translate.use(language);
  }
}
