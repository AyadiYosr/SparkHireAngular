import { Component, OnInit, Renderer2 } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentificate',
  templateUrl: './authentificate.component.html',
  styleUrls: ['./authentificate.component.css']
})
export class AuthentificateComponent {
  constructor(private renderer: Renderer2, private authSer: AuthService, private router: Router) { }
  defaultSection = 'dsen';
  myComment = 'Rien à signaler...';
  showSignUp = false;
  errorLogin = false;

  email: string = '';

  ngOnInit(): void {
    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.text = `
      const signUpButton = document.getElementById('signUp');
      const signInButton = document.getElementById('signIn');
      const container = document.getElementById('container');

      signUpButton.addEventListener('click', () => {
          container.classList.add("right-panel-active");
      });
      signInButton.addEventListener('click', () => {
          container.classList.remove("right-panel-active");
      });
    `;
    this.renderer.appendChild(document.body, script);
  }
  isValidEmail(email: string) {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  }
  
  onSubmit(f: any) {
    
    console.log(f);
    if (!this.isValidEmail(f.controls.email.value)) {
      alert("tu doit entrez un mail");
      return;
    }
    
    if(f.controls.password.value.length < 8){
      alert("Le mot de passe doit etre plus de 8 caractaires");
      return;
    }
    // Check if email and confirm password match
    if (f.controls.confirmPassword.value !== f.controls.password.value) {
      alert("Les mots de passe ne correspondent pas");
      return;
    }

    // Register
    this.authSer.signUp(f.value).subscribe({
     
      next: (response) => {
        alert(response['message']);
        this.showSignUp = !this.showSignUp;
        this.router.navigateByUrl('/login');
        f.reset();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
