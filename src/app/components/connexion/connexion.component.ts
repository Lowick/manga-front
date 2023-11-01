import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
  utilisateurForm: FormGroup = new FormGroup({
email:new FormControl(''),
password: new FormControl(''),
  });
  isFormValidate = false;
  connexionKO = false;

  constructor(private utilisateurService: UtilisateurService,private router: Router
    ){}

  onSubmitForm(){
    this.isFormValidate = true;
    if(this.utilisateurForm.value){
      this.utilisateurService.connexionUtilisateur(this.utilisateurForm.value).subscribe({
        next:(response) =>{
          sessionStorage.setItem('token',response.accessToken);
          this.router.navigate(['admin'])
        },
        error:(error)=>{
          this.connexionKO=true;
        },
      });
    }
  }

}
