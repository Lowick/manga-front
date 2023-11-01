import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/models/categorie';
import { CategorieService } from 'src/app/services/categorie.service';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  updateForm!: FormGroup;
  
  categories: Categorie[] = [];
 
  constructor(
    private produitService: ProduitService,
    private categorieService: CategorieService,
    private route:ActivatedRoute,
    private router: Router
  ){
 this.updateForm = new FormGroup({
      nom: new FormControl(''),
      prix: new FormControl(''),
      quantite: new FormControl(''),
      id_categorie: new FormControl(''),
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.queryParams['id'];
    this.produitService.getOne(id).subscribe((produit) => {
      this.updateForm.patchValue(produit);
    });
    this.categorieService.getAllCategorie().subscribe(
      (data) => {
        this.categories = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des catégories:', error);
      }
    );
  }

  onSubmit() {
    const id = this.route.snapshot.queryParams['id'];
  
    console.log('cest quoi ca',this.updateForm.value)
    this.produitService.updateProduit(id, this.updateForm.value).subscribe(
      () => {

        alert('Le manga a été mis jour');
        this.router.navigate(['/admin']);
      },
      (error) => {
        if (error.status === 401) {
          alert("Vous n'avez pas la permission de modifier ce manga !");
        } else {
          alert("Une erreur s'est produite lors de la mise à jour");
          console.log(error)
        }
        this.router.navigate(['/admin']);
      }
    );
    }
  }


 
  
    




