import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from 'src/app/models/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-page-admin',
  templateUrl: './page-admin.component.html',
  styleUrls: ['./page-admin.component.css']
})
export class PageAdminComponent {
  @Input() produits: Produit[] = [];

  constructor(
    private produitService: ProduitService, private route:Router,
  ){}


  ngOnInit(): void {
    this.produitService.getAllProduit().subscribe((data: Produit[]) => {
      this.produits = data;
    });

  }

    modifierProduit(id: number) {
    this.route.navigate(['/update'], { queryParams: { id: id } });
  }

   delete(id: number) {
    console.log(id);
    const confirmDelete = confirm(
      'Etes- vous sûr de vouloir supprimer ce manga?'
    );
    if(!confirmDelete){
      return;
    }
    this.produitService.deleteProduit(id).subscribe((response)=>{
      console.log('le manga a bien été supprimé.' + response);
    });
    alert('Votre manga a bien été supprimé.')
    location.reload();
}

}
