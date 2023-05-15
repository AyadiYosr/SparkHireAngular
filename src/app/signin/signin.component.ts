import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  constructor(private authSer: AuthService, private router: Router) { }
  defaultSection = 'dsen';
  myComment = 'Rien à signaler...';
  showSignUp = false;
  errorLogin = false;
  onSubmit(f: any) {
    // console.log(f);
    // if (this.showSignUp) {
    //   // Register
    //   this.authSer.signUp(f.value).subscribe({
    //     next: (response) => {
    //       alert(response['message']);
    //       this.showSignUp = !this.showSignUp;
    //       f.reset();
    //     },
    //     error: (err) => {
    //       console.log(err);
    //     },
    //   });
    // } 
      this.authSer.signIn(f.value).subscribe({
        next: (response) => {
          console.log(response);
          alert(response['message']);
          localStorage.setItem('myToken', response['token']);
          this.router.navigateByUrl('/');
        },
        error: (err) => {
          console.log(err);
          this.errorLogin = true;
          //f.reset();
        },
      });
    
    return f;
  }
}
