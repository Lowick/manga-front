import { Component } from '@angular/core';
import { Produit } from 'src/app/models/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent {

  tabProduit: Produit []= [];

  constructor(
    private produitService:ProduitService,
  ){}

  ngOnInit():void{
    this.produitService.getAllProduit().subscribe((data: Produit[]) =>{
      this.tabProduit = data;
    })
  }

}
