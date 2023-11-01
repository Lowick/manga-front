import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utilisateur } from '../models/utilisateur';
import { Observable } from 'rxjs';
import { ResponseConnexion } from '../models/response-connexion';
import { LoginUtilisateur } from '../models/login-utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  private baseApiUrl ='http://localhost:3000/api';

  constructor(private http:HttpClient) { }

  setHeaders(){
    const jwtToken = sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      Autorization: `Bearer $(jwToken)`,
    });
    return headers;
  }

  inscriptionUtilisateur(data:Utilisateur): Observable<Utilisateur>{
    return this.http.post<Utilisateur>(
      `${this.baseApiUrl}/auth/register`,
      data
    );
  }

  connexionUtilisateur(data:LoginUtilisateur):Observable<ResponseConnexion>{
    return this.http.post<ResponseConnexion>(`${this.baseApiUrl}/auth/login`, data);
  }

  getUtilisateur():Observable<Utilisateur>{
    return this.http.get<Utilisateur>(
      `${this.baseApiUrl}/utilisateur`
    );
  }
}
