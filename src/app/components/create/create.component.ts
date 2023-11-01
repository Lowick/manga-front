import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/models/categorie';
import { CategorieService } from 'src/app/services/categorie.service';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

produitForm:FormGroup;
categories:Categorie[]=[];

constructor(private produitService:ProduitService, private router:Router, private categorieService:CategorieService){
  this.produitForm = new FormGroup({
    nom:new FormControl("", Validators.required),
    prix:new FormControl("", Validators.required),
    quantite: new FormControl("", Validators.required),
    id_categorie: new FormControl("", Validators.required),
  });
}

ngOnInit():void{
  this.categorieService.getAllCategorie().subscribe((categories:Categorie[])=>{
    this.categories = categories;
  });
}
onSubmit() {
    const newProduit = this.produitForm.value;
    newProduit.id_categorie= +this.produitForm.value.id_categorie
    console.log('cest quoi ca', newProduit)
    this.produitService.create(newProduit).subscribe((response) => {
      console.log('Produit ajouté avec succès', response)
      alert('Produit créé avec succès !');
      location.reload();
   
      this.router.navigate(['/home']);
    });
  }
}


