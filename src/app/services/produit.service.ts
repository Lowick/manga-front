import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Produit } from '../models/produit';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http:HttpClient) {}

  
  setHeaders() {
    const jwtToken = sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${jwtToken}`,
    });
    return headers;
  }

  getAllProduit(){
    return this.http.get<Produit[]>('http://localhost:3000/api/produit')
  }

  getOne(id:number): Observable<Produit>{
    return this.http.get<Produit>(`http://localhost:3000/api/produit/${id}`)

  }


  updateProduit( id:number, produit: Produit): Observable<Produit> {
    const headers = this.setHeaders();
    
    return this.http.patch<Produit>(`http://localhost:3000/api/produit/${id}`, produit, {headers});
  }

 
  deleteProduit(id: number): Observable<Produit> {
    const headers=this.setHeaders();
    return this.http.delete<Produit>(`http://localhost:3000/api/produit/${id}`, {headers});
}

  create(produit: Produit): Observable<Produit> {
    const headers= this.setHeaders();
    return this.http.post<Produit>('http://localhost:3000/api/produit', produit, {
      headers,
    });
  }
}
