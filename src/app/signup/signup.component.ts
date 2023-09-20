import { Component } from '@angular/core';
import { UserDetails } from './user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user: UserDetails = new UserDetails("","","","")

  onSubmit(){
    console.log('user: ',this.user);    
  }
}
