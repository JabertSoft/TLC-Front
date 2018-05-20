import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { User } from '../models/user.model';
import { NgForm } from '@angular/forms';
import { HeaderSmComponent} from '../header-sm/header-sm.component';
import { AppComponent } from '../app.component';


// change the MainComponent to your real component name


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user:User;
  
  constructor(){
    this.user = new User;
  }
  

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? : NgForm){
    if (form !=null){
      form.reset();
      this.user = { 
        UserName: '', 
        Password:'', 
        Email:'', 
        FirstName:'', 
        LastName:''}
    }
  }

}
