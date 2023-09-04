import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { User } from '../models/User-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email='sisi@gmail.com' as string;
  password='12345' as string;
  message="";

  constructor(private authService : AuthService,
    private router:Router) { }

    onSubmit(){
      if(this.email === "") return;
      if(this.password === "") return;
      console.log("Connexion de " + this.email + " - " + this.password)
      let nouvelUser={
        email: this.email,
        password: this.password
      }
      this.authService.logIn(nouvelUser)
      .subscribe(user => {
          if(user != null){
            this.authService.setLoggedTrue(user.id);
            localStorage.setItem("isAdmin", "true");
            this.router.navigate(["/e-gouvernance"]);
          }
      },
      (error) => {
        this.message="email ou mot de passe Invalide";
        console.error('Une erreur s\'est produite lors de la connexion :');
      }
    );
  }
  sign_in()
  {
    this.router.navigate(['/sign-in']);
  }
}
