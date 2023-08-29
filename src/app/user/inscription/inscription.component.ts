import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  public constructor(private router: Router, private authService: AuthService) {}
  image: string = '';
  nom: string = '';
  prenoms: string = '';
  email: string = '';
  dateNaissance: string = '';
  cin: string = '';
  adresse: string = '';
  sexe: string = 'homme';
  password: string = '';
  passwordConfirm: string = '';
  message: string = '';

  sign_up(): void {
    if (this.nom && this.prenoms && this.email && this.dateNaissance && this.cin && this.adresse && this.password && this.password === this.passwordConfirm) {
      const user = {
        nom: this.nom,
        prenom:this.prenoms,
        email: this.email,
        dateNaissance:this.dateNaissance,
        cin: this.cin,
        adresse: this.adresse,
        sexe: this.sexe,
        password: this.password,
        image: this.image
      };
      this.authService.signUp(user).subscribe(
        (data: any) => {
          this.message = "Utilisateur créé ! Veuillez-vous connecter.";
          console.log(data);
          this.router.navigate(['/login']);
        }, err => { console.log(err); }
      );
    } else {
      this.message = 'Veuillez remplir tous les champs correctement.';
    }
  }

  login() {
    this.router.navigate(['/login']);
  }

  onImageChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement?.files?.length) {
      const file = inputElement.files[0];
      this.readFileAsBase64(file).then(base64Data => this.image = base64Data);
    }
  }

  private readFileAsBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result?.toString() || '';
        resolve(base64String);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }
}
