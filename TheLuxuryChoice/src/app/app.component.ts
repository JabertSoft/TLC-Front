import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
    
  constructor(private translate:TranslateService, private cookieService:CookieService ){
    translate.addLangs(["en","es"]); 
    
    if(localStorage.getItem('language')){
      translate.setDefaultLang(localStorage.getItem('language'));
      translate.use(localStorage.getItem('language'));
    }
    else {
       let browserlang = this.translate.getBrowserLang();
       let lang = (browserlang.match(/en|es/) ? browserlang : "es");
       this.translate.use(lang);
       translate.setDefaultLang(lang);
       localStorage.setItem("language",lang);
       
    }
  }

  public changeLanguage(language:string){
    this.translate.use(language);
    localStorage.setItem("language",language);
  }

}

